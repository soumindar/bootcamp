const abs = x => (x >= 0) ? x : -x;

const square = x => x*x;

const isGoodEnough = (guess, x) => abs(square(guess) - x) < 0.001;

const average = (x, y) => (x + y) / 2;

const improve = (guess, x) => average(guess, x / guess);

const sqrtIter = (guess, x) => isGoodEnough(guess, x) ? guess : sqrtIter(improve(guess, x), x);

const sqrt = x => sqrtIter(1, x);

// console.log(sqrt(4));

module.exports = {abs, square, isGoodEnough, average, improve, sqrtIter, sqrt};