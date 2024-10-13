const arrayExample = [1, 5, 10];

const funcWhatToDoWithElement =(n)=>{
    console.log(n);
}

// for (let i = 0; i < arrayExample.length; i++) {
//    funcWhatToDoWithElement(arrayExample[i]);    
// }
arrayExample.forEach(funcWhatToDoWithElement); // так можно заменить цикл for!!!

//вывести в консоль все ключи объекта JohnyDepp
// использовать метод forEach() & .keys()

const JohnyDepp = {
    name: 'Johny',
    surname: 'Depp',
    age: 61,
    hobbies: ['cricket', 'golf', 'quadrober', 'actor', 'singing'],
    films: {
        1999: ['Pirates-1', 'Edward Scissorhands'],
        2003: ['Pirates-3', 'Pirates-4'],
        2001: ['Pirates-2', 'Cocaine'],
    },

    singing: function () {
        console.log('I am singing')
    }

}

const keysOfJohny = Object.keys(JohnyDepp)
console.log (keysOfJohny);

keysOfJohny.forEach(funcWhatToDoWithElement);

// вывести в консоль хобби Джонни используя forEach

JohnyDepp['hobbies'].forEach(funcWhatToDoWithElement);
