const createTask = document.querySelector('#createTask');
const createList = document.querySelector('.list');
const inputTask = document.querySelector('.task-input');
const all = document.getElementById('all');
const completed = document.getElementById('completed');
const uncompleted = document.getElementById('uncompleted');
const completeTask = document.querySelector('.list-item');
createTask.addEventListener('click', buttonClickHandler);
const tasks = []
function buttonClickHandler(){
    const newTasks = document.createElement('li');
    newTasks.classList.add('list-item');
    newTasks.textContent = inputTask.value;
    newTasks.addEventListener('click', taskHandler);
    tasks.push(newTasks);
console.log(tasks);
    showTasks(tasks);
    inputTask.value='';
}
function showTasks(arrTasks){
    createList.innerHTML = '';
    createList.append(...arrTasks);
}
function taskHandler(event){
    event.target.classList.toggle('list-item_done');
}
all.addEventListener('click', allButtonHandler);
completed.addEventListener('click', completedButtonHandler);
uncompleted.addEventListener('click', uncompletedButtonHandler);
function allButtonHandler(){
    let allPart = [];
    allPart = tasks.filter((element) => element.classList.contains('list-item'));
    showTasks(allPart);
}
function completedButtonHandler(){
    let completedPart = [];
   completedPart = tasks.filter((element) => element.classList.contains('list-item_done'));
    showTasks(completedPart);
}
function uncompletedButtonHandler(){
    let uncompletedPart = [];
    uncompletedPart = tasks.filter((element) => !element.classList.contains('list-item_done'));
     showTasks(uncompletedPart);
}