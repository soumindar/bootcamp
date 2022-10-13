function oddOrEven(x) {
    for (let i = 1; i <= x; i++) {
        if (i % 2 == 0) {
            console.log(i + " even");
        } else {
            console.log(i + " odd");
        }
    }
}

let x = 10;
oddOrEven(x);