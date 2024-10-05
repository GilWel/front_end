// Создайте ф-цию, которая возвращает квадрат числа

// Функция должна принимать целое число
// Если число не целое - скруглить его в меньшую сторону
// Функция должна вернуть квадрат этого числа


const  quadratNumber = (number) =>{

    // if (!Number.isInteger(number)) {
        number = Math.floor(number);
    // } else {
    //     number = number;
    // }

   return (Math.pow(number,2));
}

console.log(quadratNumber(3.9));