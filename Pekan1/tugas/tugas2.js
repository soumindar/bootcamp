function sumDiagonal(a) {
    let sum = 0;
    for (let i in a) {
        for (let j in a[i]) {
            if (i == j) {
                sum += a[i][j];
            }
        }
    }
    return sum;
}

let a = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
]

console.log(sumDiagonal(a));
