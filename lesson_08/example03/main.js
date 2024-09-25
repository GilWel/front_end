// Операции + операторы
 // + - / *
 const resA = 25/"5";
 console.log(resA); // 5

 const resB = 25*"5";
 console.log(resB); // 125

 const resC = 25/"a";
 console.log(resC); // NaN

 const resD = 25-"15";
 console.log(resD); // 10

 const resF = 25/0;
 console.log(resF); // ошибка

 // **
 console.log(2**4);

 // другое поведение у плюса если есть строка

 const resE = 25 + 25 + "5";
 console.log(resE); // 505

 const resG = null + "5";
 console.log(resG); // null5

 // унарный +

 const resH = 25 + 25 + +"5"; // если ставить + без пробела, то это будет уже число
 console.log(resH); // 55


 // < > <= <== == === !=
 console.log("=========сравнение===============");

const varA = 25;
const varB = "25";
console.log(varA == varB); // приводит к одному типу и сравнивает - не строгое сравнение
console.log(varA === varB);  // вначале проверяет тип, если не совпадает, то false - строгое сравнение

const varC = true;
const varD = "25";
console.log(varA == varB);

const varE = false;
const varF = "0";
console.log(varE == varF);

// undefined & null

const varG = undefined;
const varH = null;
console.log (varG == varH);

//сравнение строк
const varK = "a";
const varL = "b";
console.log(varK < varL);

const varM = "a";
const varN = "ab";
console.log(varM<varN);

const varO = "a";
const varP = "A";
console.log(varO > varP);


 // && ||

 console.log("John" && null && 145);

 console.log("John" || null || 145);





