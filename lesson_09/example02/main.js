// Циклы
const b = [1,2,3,4,5,6,7,8,9,10];
let allElementsOfArray = ''

for (let i = 0; i<b.length; i++) {
    //console.log("Это проход цикла номер " + i);
    // console.log(b[i]);
    allElementsOfArray = allElementsOfArray + " " + b[i];
}
console.log(allElementsOfArray);

// Цикл while


// let j = 5;  // счетчик
// while(j< b.length) {
//     allElementsOfArray = allElementsOfArray + " " + b[i];
//     j++;

// }
const arrC = [];

for (let i = 0; i<5; i++) {
    arrC.push(i+5);
  }

  console.log(arrC)

  let x =5;
  while(x<10){
    arrC.push(x);
    x++
  }

  console.log(arrC);