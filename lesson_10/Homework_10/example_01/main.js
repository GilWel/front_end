//Создайте ф-цию, которая определяет парность числа

// Функция должна принимать целое число
// Если число не целое - скруглить его в меньшую сторону
// Функция должна вернуть строку 'even' если число четное
// Функция должна вернуть строку 'odd' если число не четное


function number(n) {

    // if (!Number.isInteger(n)) {
        n = Math.floor(n);
    // } else {
    //     n = n;
    // }
    return n % 2 === 0 ? "even" : "odd";
}
console.log(number(24.6));



