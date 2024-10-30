const inputElement = document.querySelector('#timeInput');
const buttonElement = document.querySelector('#start');
const divElement = document.querySelector('#int');
const alarmSound = document.querySelector('#alarmSound');

let i;

inputElement.addEventListener('input', () => {
    i = inputElement.value;
});
buttonElement.addEventListener('click', () => {
    if (i > 0) {
        startTimer();
    }
});

const startTimer = () => {
    const timeIntervalID = setInterval(() => {
        if (i <= 0) {
            clearInterval(timeIntervalID);
            divElement.textContent = "Время вышло!!!"
            alarmSound.play();
        } else {

            divElement.textContent = i;
            i--;
        }
    }, 1000);
    
    inputElement.value='';
};
