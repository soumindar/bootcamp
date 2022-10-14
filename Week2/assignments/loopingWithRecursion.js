let numberOfLoop = 5;
let arrayForLoop = [1, 2, 3, 4, 5];

// looping for
for (let i = 0; i < numberOfLoop; i++) {
    // console.log(`process ${i} inside for`);
}

const recursionFor = (i, numberOfLoop) => {
    if (i < numberOfLoop) {
        // console.log(`process ${i} inside recursion For`);
        i++;
        recursionFor(i, numberOfLoop);
    }
}

recursionFor(0, numberOfLoop);


// looping for in
for (let i in arrayForLoop) {
    // console.log(`array[${i}] = ${arrayForLoop[i]}`);
}

const recursionForIn = (i, array) => {
    if (i < array.length) {
        // console.log(`recursion get array[${i}] = ${array[i]}`);
        i++;
        recursionForIn(i, array);
    }    
}

recursionForIn(0, arrayForLoop);

// looping for of
for (let i of arrayForLoop) {
    // console.log(i);
}

const recursionForOf = (i, array) => {
    if (i < array.length) {
        // console.log(`(recursion) ${array[i]}`);
        i++;
        recursionForOf(i, array);
    }    
}

recursionForOf(0, arrayForLoop);

// looping while
let i = 0;
while (i < numberOfLoop) {
    // console.log(`process ${i}`);
    i++;
}

const recursionWhile = (i, numberOfLoop) => {
    if (i < numberOfLoop) {
        // console.log(`recursion process ${i}`);
        i++;
        recursionWhile(i++, numberOfLoop);
    }
}

recursionWhile(0, numberOfLoop);


// looping do while
i = 0;
do {
    // console.log(`process ${i}`);
    i++;
} while (i < numberOfLoop);

const recursionDoWhile = (i, numberOfLoop) => {
    // console.log(`recursion process ${i}`);
    i++;
    if (i < numberOfLoop) {
        recursionDoWhile(i, numberOfLoop);
    }
}

recursionDoWhile(0, numberOfLoop);


// sample case: find index
// imperative programming
let items = ['buku', 'pensil','penggaris'];
let searchKey = 'pensil';

function findIndex(items, searchKey) {
    for (let i in items) {
        if (items[i] == searchKey) {
            return i;
        }
    }
}

let indexFound = findIndex(items, searchKey);

console.log(indexFound);

// using recursion instead of "for" inside function findIndex()
const findIndex2 = (items, searchKey, i) => {
    if (i < items.length) {
        if (items[i] == searchKey) {
            return i;
        }
        i++;
        return findIndex2(items, searchKey, i);
    }    
}

console.log(findIndex2(items, searchKey, 0));
