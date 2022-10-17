let strings = ['qwe', 'asd', 'zxc'];

const reversingStr = (i, str) => (i >= 0) ? (str[i] + reversingStr(--i, str)) : '';

let reversedStrings = strings.map(str => reversingStr(str));
let reversedStrings2 = strings.map(str => [...str].reverse().join(''));

console.log(reversedStrings);
console.log(reversedStrings2);