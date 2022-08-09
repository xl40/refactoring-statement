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

    it('should return false whit "-121"', function () {
        const x = -121;
        const expected = false;
        expect(isPalindrome(x)).toStrictEqual(expected)
    });

    it('should return false with "10" ', function () {
        const x = 10;
        const expected = false;
        expect(isPalindrome(x)).toStrictEqual(expected)
    });


    it('just test', function () {

        let str = "-121";

        console.log(str.charAt(str.length - 1));
        console.log(str.charAt(0));

        console.log(str.charAt(0) === str.charAt(str.length - 1));
        console.log(abc(str));

    })

    function abc(str){
        for (let i = 0, len = str.length; i < len; i++) {
            console.log(str.charAt(i));
            console.log(str.charAt(str.length - 1 - i));
            if (str.charAt(i) !== str.charAt(str.length - 1 - i)){
                return false;
            }
        }
        return true;
    }
})
