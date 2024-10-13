//ключ - строка (или символ), значение -любое

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
//чтение свойств объекта
//1
console.log(JohnyDepp.name);
//2
console.log(JohnyDepp['name']);

//разница заключается в том, что 
const request = 'age';
// console.log (JohnyDepp.request); - так не работает, надо квадратные скобки для нахождения значения.
console.log(JohnyDepp[request]);

// Добавлять свойство heigth

JohnyDepp.heigth = 175;
console.log(JohnyDepp);

// удаление свойства

delete JohnyDepp.age;
console.log(JohnyDepp);

//цикл в свойствах объекта

for (let k in JohnyDepp) {
    console.log(JohnyDepp[k]);
}

// прочитаем значения свойства 1999 в значении свойства films

console.log(JohnyDepp['films']['1999'][0]);


//вызов метода (функцию) у объекта JohnyDepp

JohnyDepp.singing();

//Еще пример объекта:

const RikkiMartinShow = {
    time: '17-00',
    place: 'Berlin',
    price: '100',
    duration: '4'
}

// Проверка на наличие свойства у объекта, например, есть ли св-во возраст у Джонни

console.log('age' in JohnyDepp);

// наследование объектов

const human = {
    limbs: 4,
    walking: function () {
        console.log('I am walking');


    }
}
Object.setPrototypeOf(JohnyDepp, human);

JohnyDepp.walking();


// создание объекта с помощью литерала
const someObj1 = {};

// создание объекта с помощью конструктора
const someAnotherObject1 = new Object();

// создадим обьект который может быть прототипом в теории для Джонни
const human1 = {
    limbs: 4,
    walking: function() {
        console.log('I am walking');
    },
}

// и укажем что human - прототип. (Object - конструктор)

Object.setPrototypeOf(JohnyDepp, human);

// проверяем унаследовался ли метод от human
JohnyDepp.walking();

// создание обьекта с помощью литерала обьекта
const someObj = {};
// создание обьекта с помощью конструктора
const someAnotherObject = new Object();

// У каждого обьекта есть как минимум один прототип, он хранится 
// в статическом свойстве конструктора Object.prototype и автоматически
// становиться прототипом у каждого нового обьекта


//*********************************************************************/

// Методы для работы с объектами (получить ключи в виде массива):

const keysOfJohnyDepp = Object.keys(JohnyDepp);

console.log(keysOfJohnyDepp);

// Получить значения в виде массива

const valuesOfJohnyDepp = Object.values(JohnyDepp);

console.log(valuesOfJohnyDepp);

// Получить список и ключей и их значений в виде массива
//[[key, value],[...],[...],[...],[...],[...],[...]];

const entriesOfJohnyDepp = Object.entries(JohnyDepp);
console.log(entriesOfJohnyDepp);

// из массива получить объект

// элементы массива обязательно должны быть из двух элементов
const cloneOfJohn = [
    
        [ 'name', 'Johny' ],
        [ 'surname', 'Depp' ],
        [ 'hobbies', [ 'cricket', 'golf', 'quadrober', 'actor', 'singing' ] ],
        [ [ 'heigth', 175 ]
      ]
]
const cloneOfJohnObject = Object.fromEntries(cloneOfJohn);
console.log (cloneOfJohnObject)

// классная работа
// из объекта const RikkiMartinShow или human вытянуть сначала массив ключей
// а потом массив значений. Сохранить в отдельные переменные

const RikkiMartinShow1 = {
    time: '17-00',
    place: 'Berlin',
    price: '100',
    duration: '4'
}

const keysOfRikkiMartinShow1 = Object.keys(RikkiMartinShow1);

console.log(keysOfRikkiMartinShow1);

const valuesOfRikkiMartinShow1 = Object.values(RikkiMartinShow1);

console.log(valuesOfRikkiMartinShow1);




