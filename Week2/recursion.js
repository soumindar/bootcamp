const factorialOf = n => {
    if (n == 0) return 1;
    return n*factorialOf(n-1);
}

console.log(factorialOf(5));