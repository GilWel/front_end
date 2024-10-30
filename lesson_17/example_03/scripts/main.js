console.log('Start');

const intervalID = setInterval(
    () => {
        console.log(new Date());
    },
    2000
);
//выполняет этот код через интервал 2 секунды, т.е. повторяется 

// приостанавливает интервал

setTimeout(() => {
    clearInterval(intervalID);
}, 10000);

//остановку кода надо писать всегда внутри функции, отдельно нельзя!!!

const divElement = document.querySelector('#int');
let i = 0;

const timeIntervalID = setInterval(() => {
    if (i >= 3) {
        clearInterval(timeIntervalID);
    }
    
    divElement.textContent = i;
    i++;

}, 1000
);






