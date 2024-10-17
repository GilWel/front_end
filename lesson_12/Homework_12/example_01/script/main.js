const bodyElement = document.querySelector('body');
const buttonElement = document.querySelector('button');
const resultElement = document.querySelector('.result');
const inputElements = document.querySelectorAll('input');
const calcBMI = document.querySelector('div');

buttonElement.addEventListener('click', buttonClickHandler);

function buttonClickHandler() {

    let s1 = inputElements[0].value;
    let s2 = inputElements[1].value;

    if (s1 <= 0||s2 <= 0){
        alert("Введите пожалуйста корректные данные");
     }
     
    let valueBMI = +s1 / (+s2 / 100 * +s2 / 100);
    resultElement.textContent = valueBMI.toFixed(2);

    let conclusion = '';

    if (valueBMI < 18.5) {
        conclusion = 'У вас недостаточный вес';
    } else if (valueBMI < 24.9) {
        conclusion = 'Вы попадаете в средний диапазон';
    } else if (valueBMI < 29.9) {
        conclusion = 'У вас избыточный вес';
    } else {
        conclusion = 'Вы страдаете ожирением';
    }
    calcBMI.textContent = conclusion;
}