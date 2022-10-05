class Rectangle {
    constructor(w, h) {
        this.w = w;
        this.h = h;
    }
}

class Rectangle {
    area() {
        return (this.w * this.h);
    }
}

class Square extends Rectangle {
    constructor(s) {
        this.s = s;
        super(s, s);
    }
}

let rect1 = new Rectangle(2,4);
console.log(rect1.area());