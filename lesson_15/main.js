const tasks = [ 
    { text: 'Задача 1', isCompleted: false }, 
    { text: 'Задача 2', isCompleted: true } 
  ] 
   
   
const createTask = document.querySelector('#createTask');
const createList = document.querySelector('.list');
const inputTask = document.querySelector('.task-input');
const all = document.getElementById('all');
const completed = document.getElementById('completed');
const uncompleted = document.getElementById('uncompleted');
const completeTask = document.querySelectorAll('.list-item') 


createTask.addEventListener('click',buttonClickHandler);

function buttonClickHandler(){
const newTask = document.createElement('li'); 
newTask.classList.add('list-item');
newTask.textContent = inputTask.value;
newTask.addEventListener('click', taskHandler);

createList.append(newTask);
inputTask.value='';
}
function taskHandler(event){
    event.target.classList.toggle('list-item_done');
}


document.querySelector('.btn').addEventListener('click',filterTasksHandler());
  
 const filterTasksHandler = (status) => { 

  createList.forEach(task => {
    if (task.classList = 'list-item'&&'list-item list-item_done') {
      status===all;
  } else if (task.classList = 'list-item') {
      status === completed;
  } else if (task.classList = 'list-item_done') {
     status === uncompleted; 
  }
});
}
