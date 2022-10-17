let data = [1, 2, 3, 4, 5];

const sumArr = (arr, sum = 0, i = 0) => (i == arr.length) ? sum : sumArr(arr, sum += arr[i], ++i);

let sumData = sumArr(data);
console.log(sumData);