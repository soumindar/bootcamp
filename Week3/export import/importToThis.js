// const import1 = require('./exportThis');
const {sum, squareArea} = require('./exportThis');
let {a} = require('./exportThis');

// console.log(import1.tambah(1, 2));
// console.log(import1.kali(2, 3));
// console.log(import1.squareArea(5));

console.log(sum(1, 2));
console.log(squareArea(a));
a = 9;
console.log(a);