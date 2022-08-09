const twoSum = require("./twoSum")

describe("Statement", () => {
    it('should align baseline', function () {
        const invoice = [2, 7, 11, 15];
        const play = 9;
        const expected = [0,1];
        expect(twoSum(invoice, play)).toStrictEqual(expected)
    });
    it('should return 2', function () {
        const invoice = [3, 2, 4];
        const play = 6;
        const expected = [1,2];
        expect(twoSum(invoice, play)).toStrictEqual(expected)
    })
    it('should return 3', function () {
        const invoice = [3, 3];
        const play = 6;
        const expected = [0, 1];
        expect(twoSum(invoice, play)).toStrictEqual(expected)
    })

})