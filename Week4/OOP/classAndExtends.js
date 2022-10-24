class Animal {
    constructor (name) {
        this.name = name;
    }

    speak() {
        console.log(`${this.name} make noise`);
    }
}

let dog1 = new Animal('qwe');
dog1.speak();

// Dog extends Animal
class Dog extends Animal {
    constructor (name) {
        super(name);
    }

    speak() {
        super.speak();
        console.log(`${this.name} bark`);
    }
}

let dog2 = new Dog('asd');
dog2.speak();