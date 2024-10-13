// Math

const randNumber = Math.random();

console.log(randNumber);

const roundedNumber = Math.round(4.68);
console.log(roundedNumber);

const randNumber1 = Math.random(10);
console.log(randNumber1 * 10 );

const roundedNumber1 = Math.round((randNumber1)* 10);
console.log(roundedNumber);

const roundedNumberFloor = Math.floor(4.01);
console.log(roundedNumberFloor);

const roundedNumberCeil = Math.ceil(4.99);
console.log(roundedNumberCeil);

const pow = Math.pow(2,3);
console.log(pow);

// mit & max

const maxNumber = Math.max(1298,365,897,4598);
console.log(maxNumber);


const array = [];
for(i=0;i<15;i++) {
    array.push(Math.round(Math.random()*10))
}
console.log(array);