// Coersion - преобразование данных из одного типа в другой

const a = "abc";
const b = "123";
console.log(typeof b);
const z = 456;
const c = undefined;
const b2 = ""; //пустая строка
const d = null;
const f = true;
const e = false;

// преобразование в число
console.log("======toNumber=======")

const bToNumber = Number(b);
console.log(bToNumber);
console.log(typeof bToNumber);

const aToNumber = Number(a);
console.log(aToNumber);
console.log(typeof aToNumber);

console.log(Number(b2))  // 0 
console.log(Number(c))   //  NaN
console.log(Number(d))   // 0 
console.log(Number(f))   //  1
console.log(Number(e))   // 0 

// Преобразование в строку

console.log("======toString=======")

console.log(String(z))  // string
console.log(String(c))   //  string
console.log(String(d))   // 0 / NaN
console.log(String(f))   //  number
console.log(String(e))  // string

// Преобразование в булево значение
console.log("======to Boolean=======")
console.log(Boolean(b))  // true
console.log(Boolean(z))   // true
console.log(Boolean(b2))   // false
console.log(Boolean(c))   // false
console.log(Boolean(d))   // false