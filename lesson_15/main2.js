const createTask = document.querySelector('#createTask');
const createList = document.querySelector('.list');
const inputTask = document.querySelector('.task-input');
const all = document.getElementById('all');
const completed = document.getElementById('completed');
const uncompleted = document.getElementById('uncompleted');
const completeTask = document.querySelector('.list-item');
const allButtonStatus = document.querySelector('.status');

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

// all.addEventListener('click', () => filterTasksHandler('all'));
// completed.addEventListener('click', () => filterTasksHandler('completed'));
// uncompleted.addEventListener('click', () => filterTasksHandler('uncompleted'));

allButtonStatus.addEventListener('click', filterTasksHandler);

function filterTasksHandler(event) {
    
    const status = event.target;
    
//поиск кнопки по id:
    if (status.id === 'all' || status.id === 'completed' || status.id === 'uncompleted') {
    
        let filteredTasks = [];

    if (status.id === 'all') {
        filteredTasks = tasks;

    }
    else if (status.id === 'completed') {
        filteredTasks = tasks.filter((task) => task.classList.contains('list-item_done'));

    }
    else if (status.id === 'uncompleted') {
        filteredTasks = tasks.filter((task) => !task.classList.contains('list-item_done'));

    };
    showTasks(filteredTasks);
    }
}


