// Изменение существующего элемента на странице

// 1. находим элемент по классу
const h1Element = document.querySelector('.header');
console.log(h1Element);
//2.a. Меняем текст внутри элемента
h1Element.textContent = 'Document Objekt Model';

//2.b. Меняем набор классов(стилизацию)

// добавляем

h1Element.classList.add('red');

// убавляем

h1Element.classList.remove('blue');

//если класс есть - удаляет, если нет -добавляет

h1Element.classList.toggle('black');

// удаление элементов со страницы

const linkToDeleteElement = document.querySelector('.link');

linkToDeleteElement.remove();

// *** Добавление новых элементов на страницу

//1. Создаем новый элемент по тэгу 

const newParagraphElement = document.createElement('p');


// 2. Меняем текст внутри элемента
newParagraphElement.textContent = 'Текст внутри параграфа';

//выбрать место, куда вставить новый элемент

// 3.1 Выбираем элемент, относительно которого мы будем выбирать
const bodyElement = document.querySelector('body');

// 3.2 Выбираем метод которым будем вставлять в зависимости от желаемого места
//  перед закрывающим тэгом - append

bodyElement.append(newParagraphElement);

// после открывающего тэга -prepend
// перед открывающим тэгом- befor
// после закрывающим тэгом -after

//**Калькулятор */
// находим все элементы

const buttonElement = document.querySelector('button');
const resultElement = document.querySelector('.result');
// Модификация querySelectorAll чтобы найти множество элементов
const inputElements = document.querySelectorAll('input');
// inputElements[0];
// inputElements[1];

buttonElement.addEventListener('click', buttonClickHandler);




function buttonClickHandler(){
   
    let s1 = inputElements[0].value;
    let s2 = inputElements[1].value;
    let summ = +s1 + +s2;
    resultElement.textContent = summ;
}


