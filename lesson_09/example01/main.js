const { i } = require("../example02/main");

// String [] Array= [5]; // Java
const arrA = [1, 3, 5, "abcd", true, null, undefined, [10, 100], { a: 67 }]; // любые типы можно в массив вписать, в фигурных скобках - объект

const b = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const firstElemofB = b[0];
console.log(firstElemofB);

console.log(b.length);  // длина массива

const resultOfPush = b.push("new last element");        // добавляет последний элемент в массив
console.log(b);
console.log(resultOfPush);

const resultOfPop = b.pop();           //удаляет последний элемент из массива
console.log(b);
console.log(resultOfPush);


b.unshift("new FIRST ELEMENT");  // добавляет первый элемент
console.log(b);

b.shift();                     // удаляет первый элемент
console.log(b);

b.shift();
b.push(firstElemofB);
console.log(b);
for (let i = 0; i <= 10; i++) {
    console.log("Это проход цикла номер" + b[i]);
}

