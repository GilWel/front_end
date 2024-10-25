const createTask = document.querySelector('#createTask');
const createList = document.querySelector('.list');
const inputTask = document.querySelector('.task-input');
const all = document.getElementById('all');
const completed = document.getElementById('completed');
const uncompleted = document.getElementById('uncompleted');
const completeTask = document.querySelector('.list-item');
createTask.addEventListener('click', buttonClickHandler);
const tasks = []
function buttonClickHandler() {
    const newTasks = document.createElement('li');
    newTasks.classList.add('list-item');
    newTasks.textContent = inputTask.value;
    newTasks.addEventListener('click', taskHandler);
    tasks.push(newTasks);

    showTasks(tasks);
    inputTask.value = '';
}
function showTasks(arrTasks) {
    createList.innerHTML = '';
    createList.append(...arrTasks);
}
function taskHandler(event) {
    event.target.classList.toggle('list-item_done');
}

all.addEventListener('click', () => filterTasksHandler('all'));
completed.addEventListener('click', () => filterTasksHandler('completed'));
uncompleted.addEventListener('click', () => filterTasksHandler('uncompleted'));


function filterTasksHandler(status) {
    let filteredTasks = [];


    if (status === 'all') {
        filteredTasks = tasks.filter((task) => task.classList.contains('list-item'));
        // аналогичная запись : filteredTasks = tasks.filter(task => task.classList.contains('list-item'));


    }
    else if (status === 'completed') {
        filteredTasks = tasks.filter((task) => task.classList.contains('list-item_done'));


    }
    else if (status === 'uncompleted') {
        filteredTasks = tasks.filter((task) => !task.classList.contains('list-item_done'));


    }
    return showTasks(filteredTasks);
}


