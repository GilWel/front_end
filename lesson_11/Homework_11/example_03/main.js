const personDescr = {

    name: 'Ivan',
    surname: 'Petrov',
    heigth: 185,
    weight: 75,
    profession: 'correspondent'
}

const valuesOfObject = (n) => {
    const valuesOfPersonDescr = Object.values(personDescr);
    let str = '';
    str = valuesOfPersonDescr.join(', ');
    return str;
};

console.log(valuesOfObject(personDescr));



