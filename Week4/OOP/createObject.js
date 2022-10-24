// object literals

const person1 = {
    name: "Chris",
    introduceSelf() {
        console.log(`Hi! I'm ${this.name}.`);
    },
};
  
const person2 = {
    name: "Deepti",
    introduceSelf() {
      console.log(`Hi! I'm ${this.name}.`);
    },
};

person1.introduceSelf();
person2.introduceSelf();


// constructor function

function createPerson(name) {
    const obj = {};
    obj.name = name;
    obj.introduceSelf = function () {
      console.log(`Hi! I'm ${this.name}.`);
    };
    return obj;
}

const salva = createPerson("Salva");
salva.name;
salva.introduceSelf();


function Person1(name) {
    this.name = name;
    this.introduceSelf = function () {
      console.log(`Hi! I'm ${this.name}.`);
    };
}

const frankie = new Person1("Frankie");
frankie.name;
frankie.introduceSelf();


// create object using Class

class Person {
    constructor(name) {
      this.name = name;
    }

    introduceSelf() {
      console.log(`Hi! I'm ${this.name}.`);
    }
}

const sou = new Person('Sou');
sou.name;
sou.introduceSelf();