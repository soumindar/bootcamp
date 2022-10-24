class MyClass {
    a;
    constructor(a) {
        this.a = a;
    }
    
    get b() {
        return this.a + 1;
    }

    set c(x) {
        this.a = x / 2;
    }

    d() {
        return this.a + 1;
    }

    e(x) {
        this.a = x / 2;
    }
};

class ChildClass extends MyClass {
    constructor(a) {
        super(a);
    }
};

const myObj = new MyClass(7);
const childObj = new ChildClass(2);

console.log(myObj.a);
console.log(myObj.b);
console.log(myObj.d());
myObj.c = 10;
console.log(myObj.a);
myObj.e(20);
console.log(myObj.a);

console.log('\n');

console.log(childObj.a);
console.log(childObj.d());