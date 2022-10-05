let nums = [2, 3, 6, 6, 5];

let max1 = -1;
let max2 = -1;

for (i in nums) {
    if (nums[i] > max1) {
        max1 = nums[i];
    }
}

for (i in nums) {
    if ((nums[i] > max2) && (nums[i] != max1)) {
        max2 = nums[i];
    }
}

console.log(max2);