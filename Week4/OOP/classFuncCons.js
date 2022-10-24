// class Person
function Person(name) {
    this.name = name;
    this.sayHello = (name) => {
        console.log(`${this.name} say hello to ${name}`);
    };
}

let p1 = new Person('asd');
p1.sayHello('qwe');

// inheritance
function Employee(firstName, lastName) {
    Person.call(this, firstName);
    this.lastName = lastName;
}

let e1 = new Employee('sou', 'qol');
e1.sayHello(p1.name);


// prototype
Person.prototype.sayBye = (name) => {
    console.log(`${this.name} say bye to ${name}`);
}

p1.sayBye('qwe');