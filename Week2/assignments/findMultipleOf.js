let nums = [1, 3, 5, 4, 6, 10, 9, 24, 8, 7, 66];

const findMulOf = (array, num) => {
    let arrayAnswer = [];
    for (let i in array) {
        if (array[i] % num == 0) {
            arrayAnswer.push(array[i]);
        }
    }

    return arrayAnswer;
}

console.log(findMulOf(nums, 3));