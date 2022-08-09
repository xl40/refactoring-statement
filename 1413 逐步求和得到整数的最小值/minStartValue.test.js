const minStartValue = require("./minStartValue")

/**
 * 给你一个整数数组 nums。你可以选定任意的正数 startValue 作为初始值。
 * 你需要从左到右遍历 nums数组，并将 startValue 依次累加上nums数组中的值。
 * 请你在确保累加和始终大于等于 1 的前提下，选出一个最小的正数作为 startValue 。
 * */

describe("Statement", () => {
    it('should return 5 with [-3,2,-3,4,2]', function () {
        const nums = [-3, 2, -3, 4, 2];
        const expected = 5;
        expect(minStartValue(nums)).toStrictEqual(expected)
    });

    it('should return 1 with [1,2]', function () {
        const nums = [1,2];
        const expected = 1;
        expect(minStartValue(nums)).toStrictEqual(expected)
    });

    it('should return 5 with [1,-2,-3]', function () {
        const nums = [1,-2,-3];
        const expected = 5;
        expect(minStartValue(nums)).toStrictEqual(expected)
    });
});