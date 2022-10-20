const sum = (a, b) => a + b;

const mul = (a, b) => a * b;

const rectArea = (a, b) => mul(a, b);

const squareArea = (a) => rectArea(a, a);

let a = 5;

// exports.tambah = sum;
// exports.kali = mul;
// exports.squareArea = squareArea;

module.exports = {
    a,
    sum,
    mul,
    squareArea
}