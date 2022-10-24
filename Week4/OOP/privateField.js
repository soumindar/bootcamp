class ClassWithPrivateField {
    #privateField;
    constructor() {
        this.#privateField = 12;
    }
}

class SubClass extends ClassWithPrivateField {
    #subPrivateField;
    constructor() {
        super();
        this.#subPrivateField = 23;
    }
}

let a = new SubClass();
console.log(a);