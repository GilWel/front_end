let array = (arr) => {
let newArr = {};

arr.forEach (element => {
    newArr[element] = element;
});   

 return newArr; 

};

console.log(array(['abc', 6.9, 'hello world!']));

