const factorialOf = n => {
    if (n == 0) return 1;
    if (n > 0) return n*factorialOf(n-1);
}

console.log(factorialOf(5));