let data = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const getPrime = arr => arr.filter(isPrime);
const getPrime2 = arr => arr.filter(x => isPrimeWithRecursion(x));

const isPrime = x => {
    if (x == 1) return false;
    if (x == 2) return true;

    for (let i = 2; i <= Math.floor(Math.sqrt(x)); i++) {
        if (x % i == 0) {
            return false;
        }
    }
    
    return true;
}

const isPrimeWithRecursion = (x, i = 2) => {
    if (x == 1) return false;
    if (x == 2) return true;

    if (i > Math.floor(Math.sqrt(x))) {
        return true;
    } else {
        return (x % i == 0) ? false : isPrimeWithRecursion(x, ++i);
    }
}

let primeOfData = getPrime(data);
let primeOfData2 = getPrime2(data);
console.log(primeOfData);
console.log(primeOfData2);