let strings = ['qwe', 'asd', 'zxc'];

const reversingStr = str => {
    let revStr = '';
    for (let i = str.length-1; i >= 0; i--) {
        revStr += str[i];
    }

    return revStr;
}

const reversingStrRecursive = (i, str) => (i < 0) ? '' : (str[i] + reversingStrRecursive(--i, str));

const reversingStrRecExplained = function (i, str) {
    if (i < 0) {
        return '';
    } else {
        return str[i] + reversingStrRecExplained(--i, str);
    }
}

let reversedStrings = strings.map(str => reversingStr(str));
let reversedStringsFP = strings.map(str => [...str].reverse().join(''));
let reversedStringsRecursive = strings.map(str => reversingStrRecursive(str.length-1, str));

console.log(reversedStrings);
console.log(reversedStringsFP);
console.log(reversedStringsRecursive);

// 'qwe'
// (2, 'qwe') = e + (1, 'qwe') = 'e' + 'wq' = 'ewq'
// (1, 'qwe') = w + (0, 'qwe') = 'w' + 'q' = 'wq'
// (0, 'qwe') = q + (-1, 'qwe') = 'q' + '' = 'q'
// (-1, 'qwe') = ''
