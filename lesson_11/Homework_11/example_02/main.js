const charDescription = (array)=> {
const newObj = {};

array.forEach(element => {
    newObj[element[0]] = element[1];
       
});
return newObj;
}
console.log(charDescription([['name', 'Ivan'],
        ['surname', 'Petrov'],
        ['heigth', 185],
        ['weight', 75],
        ['hobbies', ['hockey', 'chess', 'reading', 'singing']],
        ['profession', 'correspondent']]));











   

// const charDescriptionToObject = Object.fromEntries(charDescription);
// console.log(charDescriptionToObject) 