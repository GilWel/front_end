// Напишем функцию, которая принимает как аргумент массив из чисел
// (мы знаем точно что аргументом будет массив из чисел)
// Функция возвращает нам массив такой же длины, где каждый элемент массива возведен в квадрат
// Функция должна быть стрелочной

const functionPow = x => x**2;

const arrayD = (array)=> {

    const newArrayD = [];

    for (let index = 0; index < array.length; index++) {

    newArrayD.push(functionPow(array[index]));

        
     }
     return newArrayD;
     
   
}

console.log(arrayD ([2,5,8,9,10,8]));

