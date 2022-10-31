// pseudocode: https://en.wikipedia.org/wiki/Sieve_of_Eratosthenes#Pseudocode

const primeSieve = n => {
  let A = new Array(n + 1).fill(true);
  A[0] = false;
  A[1] = false;

  for (let i = 2; i <= Math.floor(Math.sqrt(n)); i++) {
    if (A[i]) {
      for (let j = i * i; j <= n; j += i) {
        A[j] = false;
      }
    }
  }

  return A.map((x, index) => {
    if (x) {
      return index;
    }
    return null;
  });
}

console.log(primeSieve(100));