function twoSum(nums, target) {
    for (let i = 0, len = nums.length; i < len; i++) {
        for (let j = i + 1; j < len; i++) {
            if (nums[i] + nums[j] === target) {
                return [i, j];
            }
        }
    }

}

module.exports = twoSum;
