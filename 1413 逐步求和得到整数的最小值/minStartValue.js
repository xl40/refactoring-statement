function minStartValue(nums) {
    let result = 1;
    let sum = result;

    for (let i = 0; i < nums.length; i++) {
        sum += nums[i];
        if (sum <= 0) {
            result = result - sum + 1;
            sum = 1;
        }
    }
    return result;
}

module.exports = minStartValue;