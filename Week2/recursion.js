const factorialOf = n => (n == 0) ? 1 :  n*factorialOf(n-1);
console.log(factorialOf(5));