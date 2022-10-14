const createObj = (person, age) => ({...person, age});

const person = {
    name: 'sou',
    age: 24,
    city: 'pwt'
}


let newPerson = {...person, age: 22};

console.log(person, newPerson);