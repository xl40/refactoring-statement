const twoSum = require("./twoSum")

describe("Statement", () => {
    it('should align baseline', function () {
        const invoice = [2, 7, 11, 15];
        const play = 9;
        const expected = [0,1];
        expect(twoSum(invoice, play)).toStrictEqual(expected)
    });
})