let data = [4, 2, 5, 1, 3, 1];
// let arr = [];
let min = Math.min.apply(Math, data);

// arr = [...arr, min, data.splice(data.findIndex(min), 1)];

// arr = [min, ...data.filter(x => x != min)];
// let arr = data.filter(x => x != Math.min.apply(Math, data));
let arr = data;
arr.splice(0,1);
console.log(data);