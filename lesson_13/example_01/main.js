// MAP
const arr123 = [5, 10, 30];
const multiple2 = (x) => {
    return x * 2;
}

const arr123modified = arr123.map(multiple2);
console.log(arr123modified);


console.log('========================================');

// способы объявления функций:

// function NameOfFunction(){   - можно писать в конце, везде ее видит (function declaration)
//}

// const NameOfFunction = function(){  -  нужно писать всегда в начале function expression)
//}

// const NameOfFunction = () =>{  -  нужно писать всегда в начале
//}



const arrOfPeople = [{ name: 'John', age: 12 },
{ name: 'Bred', age: 5 },
{ name: 'Patrick', age: 20 },
{ name: 'Cris', age: 40 }];

const addAnniversary = (humen) => {
    resultObj = {};
    resultObj.name = humen.name;
    resultObj['age'] = humen['age'];

    //let isAdult;
    // if(resultObj.age >= 18) {
    //     isAdult = true
    // } else {
    //     isAdult = false
    // }

    const isAdult = resultObj['age'] > 18 ? true : false
    resultObj['anniversary'] = isAdult;
    return resultObj;


}

const arr123PeopleModified = (arrOfPeople.map(addAnniversary));
console.log(arr123PeopleModified);

console.log('=================================================')

const arrOfPeople1 = [{ name: 'John', age: 12 },
{ name: 'Bred', age: 5 },
{ name: 'Patrick', age: 20 },
{ name: 'Cris', age: 40 }];

const addAge = (humen) => {

    // чтобы не передавать все параметры, которые остаются неизменными:

    const resultObj = { ...humen };

    // resultObj = {};
    // resultObj.name = humen.name;


    const addAgePeople = humen.age + 1;
    resultObj.age = addAgePeople;

    return resultObj;
}

const addResult = arrOfPeople.map(addAge);
console.log(addResult);

console.log('=====================================')

// const courceArray = [1,2,3];
// const copyOfArray = [...courceArray];

// const courceObj = { name: 'John', age: 12 }
// const copyOfObj = {...courceObj};

console.log("======================================================================================");


// FILTER

const arrayOfNumbers = [18, 59, 1, 8, 17, 111];

// вариант 1
// const filter18 = (num) =>{
//     if(num >= 18){
//         return true;
// }else{
//     return false;
// }

// вариант 2
// тернарным 

//    const filter18 = (num) => num >= 18 ? true:false;


// вариант 3
//  const filter18 = (num) => num >= 18;

// вариант 4

const arrayOfNumber18Plus = arrayOfNumbers.filter((num) => num >= 18);
console.log(arrayOfNumber18Plus);

console.log("===================================================================");


const arrOfPeople2 = [{ name: 'John', age: 12 },
    { name: 'Bred', age: 5 },
    { name: 'Patrick', age: 20 },
    { name: 'Cris', age: 40 }];

             

    console.log(arrOfPeople2.filter((ageOf18)=>ageOf18.age > 18));
    








