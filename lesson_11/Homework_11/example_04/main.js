function filter(objects) {

  const result = {};


  const valuesOfFilter = Object.values(objects);

  valuesOfFilter.forEach(element => {

    result[element] = typeof element;

  });
  return result;
};


console.log(filter({ a: 'a', '36.6': 36.6, 'John Doe': 'John Doe' }));
console.log(filter({name: 'Ivan',
                   surname: 'Petrov',
                   heigth: 185,
                   weight: 75,
                   profession: 'correspondent'}));

  