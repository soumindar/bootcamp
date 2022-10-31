// pseudocode: https://simple.wikipedia.org/wiki/Euclidean_algorithm

const gcd = (m, n) => {
  if (m < n) {
    [m, n] = [n, m];
  }

  while (n != 0) {
    r = m % n;
    m = n;
    n = r;
  }

  return m;
}

console.log(gcd(12, 30));