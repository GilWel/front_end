// Задание 7. (необязательное)
// Напишите функцию intersection(arr1, arr2). 
// Она должна принимать на вход два массива целых чисел. 
// Функция должна вернуть новый массив чисел, содержащихся в обоих исходных массивах (порядок не важен).

// Протестируйте решение, вызывая функцию с разными аргументами:

// console.log(intersection([1, 5, 4, 2], [8, 91, 4, 1, 3])); // должна вернуть [4, 1]
// console.log(intersection([1, 5, 4, 2], [7, 12])); // должна вернуть []
// console.log(intersection([1, 1, 0, 0, 0, 1, 5, 4, 2], [7, 12, 1, 1, 1, 1, 1, 0, 0, 0, 0])); // должна вернуть [1, 0]

const intersection = (arr1, arr2) => {

    const arr3 = [];
   
    for (let i = 0; i < arr1.length; i++) {

        for (let j = 0; j < arr2.length; j++) {
            
                if (arr1[i] === arr2[j] ) {
                    arr3.push(arr2[j]);
                }  
        }
    }
   const newArr = [...new Set(arr3)];
    return newArr;


}

console.log(intersection([4, 5, 5, 9, 13, 87], [65, 5, 9, 13,5,5,39]))

console.log(intersection([1, 5, 4, 2], [8, 91, 4, 1, 3])); // должна вернуть [4, 1] 

console.log(intersection([1, 5, 4, 2], [7, 12])); // должна вернуть [] 

console.log(intersection([1, 1, 0, 0, 0, 1, 5, 4, 2], [7, 12, 1, 1, 1, 1, 1, 0, 0, 0, 0])); // должна вернуть [1, 0]