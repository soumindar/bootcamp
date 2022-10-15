// function expression
// input data array of positif integer
// output sorted number increasing

const sort = (nums, order) => {
    isAscending = (order == 'ascending');
    isDescending = (order == 'descending');
    for (let i in nums) {
        let min = 999999;
        let max = -1;
        let swapThis = -1;
        for (let j = i; j < nums.length; j++) {
            if ((nums[j] < min) && (isAscending)) {
                min = nums[j];
                swapThis = j;
            } else if ((nums[j] > max) && (isDescending)) {
                max = nums[j];
                swapThis = j;
            }
        }
        [nums[i], nums[swapThis]] = [nums[swapThis], nums[i]];
    }

    return nums;
}

let numbers = [9, 6, 5, 3, 7, 2, 8, 1, 4];
let sortedNumbers = sort(numbers, 'ascending');

console.log(sortedNumbers);