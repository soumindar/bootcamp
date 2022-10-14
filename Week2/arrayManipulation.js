let numbers = [1, 2, 3, 4];
let items = ['item1', 'item2', 'item3', 'item4'];

let combineArr = [...numbers, ...items];
let [firstElement, secondElement, thirdElement] = items;

let item1 = 'asd';
let item2 = 'qwe';

[item1, item2] = [item2, item1];

console.log(item1, item2);

items.splice(4, 0, item1);
console.log(items);