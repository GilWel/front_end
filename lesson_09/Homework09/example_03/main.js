const arrayB = [];

for (i = 0; i < 10; i++) {
    arrayB.push(Math.round(Math.random() * 75));
}
console.log(arrayB);

let minNumber = arrayB[0];
let maxNumber = minNumber;
 let sum = 0;

for (i = 0; i < arrayB.length; i++) {

    if (arrayB[i] < minNumber) {
        minNumber = arrayB[i];
    }
    if (arrayB[i] > maxNumber) {
        maxNumber = arrayB[i];
    }
     sum = (minNumber + maxNumber);
}

console.log(`Максимальное значение равно ${maxNumber}`);  
console.log(`Минимальное значение равно ${minNumber}`);
console.log(`сумма составляет ${sum}`);