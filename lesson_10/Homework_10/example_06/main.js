//Напишите функцию reverseWords(str), принимающую на вход строку. Функция должна вернуть новую строку, 
//расставив слова в обратном порядке.Если в строке есть знаки препинания, их можно удалить или оставить — на ваше усмотрение.

function reverseWords(str) {
    let str1 = (str.replace(/[.,:!]/g, ''));
    const arreyStr = str1.split(" ");
    return arreyStr.reverse().join(" ").toLowerCase();


}
console.log(reverseWords("Лист осенний кружится: осень, холодно!"));