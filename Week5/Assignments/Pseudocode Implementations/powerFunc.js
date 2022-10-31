// pseudocode: https://codecrucks.com/exponential-problem-solving-using-divide-and-conquer/

const pow = (x, n) => {
  if (n === 0) {
    return 1;
  } else {
    m = pow(x, Math.floor(n/2));
    if (n % 2 === 0) {
      return m * m;
    } else {
      return m * m * x;
    }
  }
}

console.log(pow(2, 10));