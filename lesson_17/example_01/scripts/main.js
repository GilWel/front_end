console.log('Start');
//const userName = prompt('Введите ваше имя');
const inputNameElement = document.querySelector('#user-name');
const buttonElement = document.querySelector('button')

inputNameElement.addEventListener('input', () => {
    // console.log('инпут изменен');
    const userName = inputNameElement.value;

    console.log(`Hello, ${userName}`);
})

buttonElement.addEventListener('click', () =>{
    console.log('click')
    
})
console.log('Старт цикла')

for(let i = 0; i <5_000_000_000; i++){

}
   
    console.log('Конец цикла')



console.log(`Конец выполнения кода`);
