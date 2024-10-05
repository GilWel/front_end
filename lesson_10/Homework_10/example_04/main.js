//Нужно создать две функции.

// Первая функция должна принимать число и возвращать результат булевого типа - является ли число простым, или нет. Число является простым, если оно делиться без остатка только на 1 и само на себя.
// 
// Вторая функция должна вернуть в виде массива все простые числа в промежутке от 1 до n, где n - первый аргумент функции.
// 
// Вторая функция должна пользоваться первой функцией для определения простых чисел.
// 
// Первая функция не должна быть колбеком, просто рядом лежать, или даже внутри второй функции. На ваш выбор.

function primeNumber(n) {
    if (n <= 1) {
        return false;
    }
    for (let i = 2; i < n; i++) {
        if (n % i === 0) {
            return false;
        } else {
            return true;
        }
    }
}
console.log(primeNumber(7));

function arrAllPimeNumbers(n) {
    const array = [];
    for (let i = 1; i < n; i++) {
        if (primeNumber(i)) {
            array.push(i);
        }
    }

    return array;

}

const endNumber = 45;
const resultArray = arrAllPimeNumbers(endNumber);

console.log(`простые числа в промежутке с 1 до ${endNumber} сгруппированны в массив: [${resultArray} ]`);
