// Создать функцию, которая группирует студентов по возрасту.
// На выходе требуется получить объект, где ключ - возраст, а значение - массив студентов, 
// которые относятся к данной возрастной группе.

// Исходный массив:

const students = [
    { name: 'alex', age: 20 },
    { name: 'mike', age: 24 },
    { name: 'masha', age: 20 },
    { name: 'stas', age: 18 },
];

const listOfStudents = (student) => {
    return [...students].sort((a, b) => (a.age - b.age));
}
console.log(listOfStudents(students));


const grouped = {};
students.forEach(s => {
    if (!grouped[s.age]) {
        grouped[s.age] = [s];
    } else {
        grouped[s.age].push(s);
    }
});
console.log(grouped);