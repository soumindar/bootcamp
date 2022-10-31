// pseudocode: https://www.mygreatlearning.com/blog/bubble-sort/#sh11

const bubbleSort = (arr) => {
  let n = arr.length;
  for (let i = 0; i <= n-i-1; i++) {
    for (let j = 0; j <= n-i-2; j++) {
      if (arr[j] > arr[j+1]) {
        [arr[j], arr[j+1]] = [arr[j+1], arr[j]];
      }
    }
  }
}

let data = [2, 5, 4, 1, 6, 3];
bubbleSort(data);
console.log(data);