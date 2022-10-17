let data = [1, 2, 3];

const makeArrayWithMap = (data, f) => {
    let arr = [];

    const map = (data, i, f) => {
        if (i == data.length-1) {
            arr.push(f(data[i]));
        } else {
            arr.push(f(data[i]))
            map(data, ++i, f); 
        }
    }

    map(data, 0, f);
    return arr;
} 

let dataPlusOne = makeArrayWithMap(data, x => x+1);
console.log(dataPlusOne);