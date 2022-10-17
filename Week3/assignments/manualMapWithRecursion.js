let data = [1, 2, 3];

const makeArrayWithMap = (data, f) => {
    let arr = [];

    const map = (data, f, i = 0) => {
        if (i > data.length-1) {
            return 'success';
        } else {
            arr.push(f(data[i]))
            return map(data, f, ++i);
        }
    }

    map(data, f);
    return arr;
}

let dataPlusOne = makeArrayWithMap(data, x => x+1);
console.log(dataPlusOne);