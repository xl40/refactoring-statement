function twoSum(nums, target) {
    /*
    for (let i = 0, len = nums.length; i < len; i++) {
        for (let j = i + 1; j < len; j++) {
            if (nums[i] + nums[j] === target) {
                return [i, j];
            }
        }
    }
    return [-1, -1];
    */

    const map = new Map();
    for (let i = 0, len = nums.length; i < len; i++) {
        if (map.has(target - nums[i])) {
            return [map.get(target - nums[i]), i]
        } else {
            map.set(nums[i], i);
        }
    }

}

module.exports = twoSum;
