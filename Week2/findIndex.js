let items = ['buku', 'pensil','penggaris'];
let input = 'pensil';

let isFound = element => element == input;
let indexFound = items.findIndex(isFound);

console.log(indexFound);