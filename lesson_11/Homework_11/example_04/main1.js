function filter(objects) {

    const result = {};


    // const valuesOfFilter = Object.values(objects);
    // const keysOfFilter = Object.keys(objects);
    const OfFilter = Object.entries(objects);

    OfFilter.forEach(element => {
result[element[1]] = "value: " + element[1] + ", type: " + (typeof element[0]);
      
    });
 
    return result;
};


console.log(filter({ a: 'a', '36.6': 36.6, 'John Doe': 'John Doe' }));