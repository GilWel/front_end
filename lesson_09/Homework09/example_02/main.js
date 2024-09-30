

const arrayB = [];

for (i = 0; i < 10; i++) {
    arrayB.push(Math.round(Math.random() * 100));
}
   
console.log(arrayB);
   const firstElemofarrayB = arrayB[0];
   const lastElemOfarrayB = arrayB[10]
   arrayB.shift(lastElemOfarrayB);
   arrayB.push(firstElemofarrayB);
console.log(arrayB);