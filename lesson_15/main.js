const tasks = [
  { text: 'Задача 1', isCompleted: false },
  { text: 'Задача 2', isCompleted: true }
]


const createTask = document.querySelector('#createTask');
const createList = document.querySelector('.list');
const inputTask = document.querySelector('.task-input');
const completeTask = document.querySelectorAll('.list-item')


createTask.addEventListener('click', buttonClickHandler);

function buttonClickHandler() {
  const newTask = document.createElement('li');
  newTask.classList.add('list-item','uncompleted');
  newTask.textContent = inputTask.value;
  newTask.addEventListener('click', taskHandler);

  createList.append(newTask);
  inputTask.value = '';
}
function taskHandler(event) {
  event.target.classList.toggle('list-item_done');
  event.target.classList.toggle('completed'); 
  event.target.classList.toggle('uncompleted'); 
}


document.getElementById('all').addEventListener('click', () =>filterTasksHandler('all'));
document.getElementById('completed').addEventListener('click',() =>filterTasksHandler('completed'));
document.getElementById('uncompleted').addEventListener('click',() =>filterTasksHandler('uncompleted'));
 
let currentFilter = 'all';

function filterTasksHandler(status) {
  const tasks = document.querySelectorAll('.list-item');
 currentFilter = status;

  tasks.forEach(task => {
    if (status === 'all') {
      task.style.display = 'list-item';
    } else if (status === 'completed') {
      task.style.display = task.classList.contains('completed') ? 'list-item_done' : 'none';
    } else if (status === 'uncompleted') {
      task.style.display = task.classList.contains('uncompleted') ? 'list-item' : 'none';
    }
  });
}




