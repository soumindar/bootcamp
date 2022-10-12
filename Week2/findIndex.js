let items = ['buku', 'pensil','penggaris'];
let searchKey = 'pensil';

let isFound = element => element == searchKey;
let indexFound = items.findIndex(isFound);

function findIndex2(items, searchKey) {
    for (let i in items) {
        if (items[i] == searchKey) {
            return i;
        }
    }
}

let indexFound2 = findIndex2(items, searchKey);

console.log(indexFound);
console.log(indexFound2);