
const arrayA = [];
for (i = 0; i < 10; i++) {
    arrayA.push(Math.round(Math.random() * 100));
}
console.log(arrayA);

    let minNumber = arrayA[0];
    for (const item of arrayA) {
        if (item< minNumber) {
            minNumber = item;
        }
    }
    console.log(`Минимальное значение равно ${minNumber}`);

    let maxNumber = arrayA[0];

    for (const item1 of arrayA) {
        if (item1 > maxNumber) {
            maxNumber = item1;
        }
    }
    console.log(`Максимальное значение равно ${maxNumber}` );
