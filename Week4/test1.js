const a = [1, 2];

const f = (arr) => {
  for (let i in arr) {
    arr[i]++;
  }
  return arr;
};

const b = f(a);
console.log(a, b);