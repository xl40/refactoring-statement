const isPalindrome = require("./isPalindrome")


/**
 *  给你一个整数 x ，如果 x 是一个回文整数，返回 true ；否则，返回 false 。
 *  回文数是指正序（从左向右）和倒序（从右向左）读都是一样的整数。
 */

describe("Statement", () => {
    it('should return 1', function () {
        const x = 121;
        const expected = true;
        expect(isPalindrome(x)).toStrictEqual(expected)
    });

    it('should return false', function () {
        const x = -121;
        const expected = false;
        expect(isPalindrome(x)).toStrictEqual(expected)
    });

    it('should return false with "10" ', function () {
        const x = 10;
        const expected = false;
        expect(isPalindrome(x)).toStrictEqual(expected)
    });
})
