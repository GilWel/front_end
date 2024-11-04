const tasks =[
     {task: 'Купить молоко', isDone: false},
     { task: 'Сходить в магазин', isDone: true },
     { task: 'Приготовить ужин', isDone: false },
];

const createTask = document.querySelector('#createTask');
const createList = document.querySelector('.list');
const inputTask = document.querySelector('.task-input');
const all = document.getElementById('all');
const completed = document.getElementById('completed');
const uncompleted = document.getElementById('uncompleted');

createTask.addEventListener('click', buttonClickHandler);
all.addEventListener('click',()=>showTasks(tasks));
completed.addEventListener('click', ()=> showTasks(tasks.filter(task => task.isDone)));
uncompleted.addEventListener('click', () => showTasks(tasks.filter(task => !task.isDone)));

function buttonClickHandler() {
    // trim - убирает пробелы (вдруг случайные)
    const taskValue = inputTask.value.trim();
    if (taskValue){
        tasks.push({task: taskValue, isDone: false});
        inputTask.value='';
        showTasks(tasks);
    }
   }
function showTasks(tasksToShow) {
   createList.innerHTML = '';
   const newTasks = tasksToShow.map(task =>{
   const newTask = document.createElement('li');
   newTask.classList.add('list-item');
   newTask.textContent = task.task;
    newTask.addEventListener('click', taskHandler);
    if(task.isDone){
        newTask.classList.add('list-item_done');
    }
    return newTask;
   });
   
newTasks.forEach(element => {
    createList.appendChild(element);
   }); 
}
function taskHandler(event) {
const clickedTaskText = event.target.textContent;
const task = tasks.find (t => t.task === clickedTaskText);
if(task){
    task.isDone = !task.isDone;
    showTasks(tasks);
}
showTasks(tasks);
  

}




