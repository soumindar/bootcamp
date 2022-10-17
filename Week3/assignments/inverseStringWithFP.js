let strings = ['qwe', 'asd', 'zxc'];

const reversingStr = str => {
    let revStr = ''
    for (let i = (str.length-1); i >= 0; i--) {
        revStr += str[i];
    }

    return revStr;
}

let reversedStrings = strings.map(str => reversingStr(str));
let reversedStrings2 = strings.map(str => [...str].reverse().join(''));

console.log(reversedStrings);
console.log(reversedStrings2);