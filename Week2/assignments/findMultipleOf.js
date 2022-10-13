let nums = [1, 3, 5, 4, 6, 10, 9, 24, 8, 7, 66];
let searchKey = 3;

const findMulOf = (array, searchKey) => {
    let arrayAnswer = [];
    for (let i in array) {
        if (array[i] % searchKey == 0) {
            arrayAnswer.push(array[i]);
        }
    }

    return arrayAnswer;
}

console.log(findMulOf(nums, searchKey));