// pseudocode: https://www.mygreatlearning.com/blog/binary-search-algorithm/#Binary%20Search%20Pseudocode

const binSer = (arr, item, beg, end) => {
  if (beg <= end) {
    let midIndex = Math.floor((beg + end) / 2);
    if (item === arr[midIndex]) {
      return midIndex;
    } else if (item > arr[midIndex]) {
      return binSer(arr, item, midIndex + 1, end);
    } else {
      return binSer(arr, item, beg, midIndex - 1);
    }
  }
  return -1;
}

const data = [1, 4, 5, 7, 9, 10, 12, 23, 27, 36];
const searchNum = 7;

console.log(binSer(data, searchNum, 0, data.length-1));