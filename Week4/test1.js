const arr1 = [1, 2];

const f = (arr) => {
  for (let i in arr) {
    arr[i]++;
  }
  return arr;
};

const arr2 = f(arr1);
console.log(arr1, arr2);