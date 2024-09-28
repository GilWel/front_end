

const arrayB = [];

for (i = 0; i < 10; i++) {
    arrayB.push(Math.round(Math.random() * 100));
}
   
console.log(arrayB);
   const firstElemofarrayB = arrayB[0];
   arrayB.shift();
   arrayB.push(firstElemofarrayB);
console.log(arrayB);