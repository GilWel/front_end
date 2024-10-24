//Упражнение по использования метода Reduce
// Подсчитать - сколько раз встречается каждый элемент в массиве

const data = ['truck', 'car','car','truck','bike','walk','car','van','bike','walk','car','van', 'car','truck'];

const dataCount = data.reduce((objCount, transport)=> {
if (!objCount[transport]) {
    objCount[transport] = 0;
}
objCount[transport] ++;
return objCount;
},{});

console.log(dataCount);