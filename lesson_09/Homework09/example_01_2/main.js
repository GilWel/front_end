
const arrayA = [];

for (i = 0; i < 10; i++) {
    arrayA.push(Math.round(Math.random() * 100));
}

   console.log(arrayA);

arrayA.sort((a, b) => a - b);
console.log('Min: ' + arrayA[0]);
console.log('Max: ' + arrayA[arrayA.length - 1]);



