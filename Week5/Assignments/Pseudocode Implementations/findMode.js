const mode = (A) => {
  // pseudocode: https://www.tutorialspoint.com/learn_c_by_examples/mode_program_in_c.htm
  
  let maxCount = -1;
  let value;
  for (let i in A) {
    let count = 0;
    for (let j = 0; j <= i; j++) {
      if (A[i] === A[j]) {
        count++;
      }
    }

    if (count > maxCount) {
      maxCount = count;
      value = A[i];
    }
  }

  return value;
}

const data = [2, 2, 3, 1, 1, 4, 1, 3, 2, 4, 2];
console.log(mode(data));