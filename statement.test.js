const statement = require("./statement")

describe("Statement", () => {
    it('should align baseline', function () {
        const invoice = [2, 7, 11, 15];
        const play = 9;
        const expected = [0,1];
        // expect(statement(invoice, play)).toBe(expected)
        expect(statement(invoice, play)).toStrictEqual(expected)
    });
})