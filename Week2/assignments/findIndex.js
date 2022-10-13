let items = ['buku', 'pensil', 'penggaris'];
let searchKey = 'pensil';

const findIndex = (array, searchKey) => {
    let indexFound = -1;
    for (let i in array) {
        if (array[i] == searchKey) {
            indexFound = i;
        }
    }
    return indexFound;
}

console.log(findIndex(items, searchKey));