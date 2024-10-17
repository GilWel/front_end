function filter(objects) {

    let result = {};
    let result1 = {};

    const OfFilter = Object.entries(objects);

    OfFilter.forEach(element => {
        result[element[1]] = element[1] + ", type: " + (typeof element[1]);

        const value = result[element[1]];

        result1[element[0]] = {value};
       
    });

    return result1;
};


console.log(filter({ a: 'a', '36.6': 36.6, 'John Doe': 'John Doe' }));
console.log(filter({ a: 45, b : true, c :'abc'}))