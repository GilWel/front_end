const randomJokePromise = fetch('https://jsonplaceholder.typicode.com/todos');
randomJokePromise
    .then((resultOfRandom) => {
        return resultOfRandom.json();
    })
    .then((body) => {
        toDoListOfBody(body.slice(0, 5));
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

// createTask.addEventListener('click', buttonClickHandler);
all.addEventListener('click', () => showTasks(tasks));
completed.addEventListener('click', () => showTasks(tasks.filter(task => task.completed)));
uncompleted.addEventListener('click', () => showTasks(tasks.filter(task => !task.completed)));

let tasks = [];

function toDoListOfBody(toDo) {
    tasks = toDo;
    const objElements = toDo.map(
        (elementOfArray) => {
            const objElement = document.createElement('li');
            objElement.classList.add('list-item');
            objElement.textContent = (`${elementOfArray.title}, completed: ${elementOfArray.completed}`);
            return objElement;
        });
    createList.append(...objElements);
    showTasks(tasks);
}
function showTasks(task) {
    task.addEventListener('click',()=> taskHandler(task));
    if (task.completed) {
        task.classList.add('list-item');
    }
    return task;
}
function taskHandler(task) {
    if (task.uncompleted){
        task.target.classList('list-item_done')
    task.completed = !task.completed;
    }
    
    
}

