//Создайте ф-цию, которая ищет сумму всех четных чисел в заданном промежутке

// Аргументы функции два - начало промежутка и конец промежутка
// Если число не целое - скруглить его в меньшую сторону
// На заданном промежутке ф-ция должна найти и сложить все четные числа и вернуть сумму

function res(min, max) {

    if (!Number.isInteger(min, max)) {
        min = Math.floor(min);
        max = Math.floor(max);
    } else {
        min = min;
        max = max;
    }
    const arr = [];
    let sum = 0;

    for (let i = min; i <= max; i = i + 1) {
        if (i % 2 === 0) {
            arr.push(i);
        }
    }
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    return sum;
}
const min = 5;
const max = 28.8;
const sum = res(min, max);

console.log(`Сумма всех четных чисел в промежутке с ${min} до ${max}  будет равна  ${sum}`);






