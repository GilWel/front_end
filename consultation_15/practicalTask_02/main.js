// Нужно найти всех пользователей с короткими именами (не более 4 букв) 
// и длинными фамилиями (более 8 букв). Создайте функцию filterPeople, 
// которая принимает массив видаpeople и возвращает массив с теми пользователями, 
// которые соответствуют обоим критериям. Рекомендуется использовать метод filter.
//  Пример работы функции:
 const people = [
    { firstName: 'Lee', lastName: 'Haverbeke' },
    { firstName: 'Clara', lastName: 'Aernoudts' },
    { firstName: 'Jan', lastName: 'Rycke' },
    { firstName: 'Anna', lastName: 'Bernardus' },
  ];
const filterPeople = (people) =>{
  return people.filter (person =>
    person.firstName.length  <=4 && person.lastName.length >= 8
  );
};
const requiredPeople = filterPeople(people);
console.log(requiredPeople);
 
 



//  
// requiredPeople === [
//   { firstName: 'Lee', lastName: 'Haverbeke' },
//   { firstName: 'Anna', lastName: 'Bernardus' },
// ];