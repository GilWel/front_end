const arrayD = [];

var sum =0;
for (i = 0; i < 10; i++) {
    arrayD.push(Math.round(Math.random() * 50));

sum +=arrayD[i];

}
console.log(arrayD);
console.log(`сумма всех элементов массива составляет ${sum}`);
