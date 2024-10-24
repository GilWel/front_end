// Упражнение по использованию методов .forEach, .push, Object.keys();
//Создать массив, который будет содержать только уникальные значения данного массива

const fruits = ['apples','bananas','oranges','apples','grapes','bananas','peaches','strwberries','oranges','apricots','bananas'];

const uniqueFruits = {};
fruits.forEach((fruit)=>{
    uniqueFruits[fruit] = true;
});
console.log(Object.keys(uniqueFruits));