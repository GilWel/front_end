const randomJokePromise = fetch('https://jsonplaceholder.typicode.com/todos');
randomJokePromise
    .then((resultOfRandom) => {
        return resultOfRandom.json();
    })
    .then((body) => {
        toDoListOfBody(body.slice(0, 15));
    })

    .catch((err) => {
        console.log('Необходимо проверить ссылку или поправить код', err)
    })
const createTask = document.querySelector('#createTask');
const createList = document.querySelector('.list');
const inputTask = document.querySelector('.task-input');
const all = document.getElementById('all');
const completed = document.getElementById('completed');
const uncompleted = document.getElementById('uncompleted');

let tasks = [];

// createTask.addEventListener('click', buttonClickHandler);
all.addEventListener('click', () => showTasks(tasks));
completed.addEventListener('click', () => showTasks(tasks.filter(task => task.completed)));
uncompleted.addEventListener('click', () => showTasks(tasks.filter(task => !task.completed)));



function toDoListOfBody(toDo) {
    tasks = toDo;
    showTasks(tasks);
}

function showTasks(tasks) {
    createList.innerHTML = '';
    const objElements = tasks.map(
        (task) => {
            const objElement = document.createElement('li');
            objElement.classList.add('list-item');
            objElement.textContent = `${task.title}, completed: ${task.completed}`;
            // objElement.addEventListener('click',()=> taskHandler(task, objElement));         
                  
    if (task.completed) {
        objElement.classList.add('completed');
        objElement.style.textDecoration = 'line-through';
    }
    return objElement;
 });
            
      
    createList.append(...objElements);
   
}




