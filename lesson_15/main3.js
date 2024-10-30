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
    return newTask;
   });
   
newTasks.forEach(element => {
    createList.appendChild(element);
   }); 
}
function taskHandler(event) {
   event.target.classList.toggle('list-item_done');

}




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






    