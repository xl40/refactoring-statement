describe("maxProfit", () => {
    it('case 1', function () {
        const nums = [7, 1, 5, 3, 6, 4];
        const expected = 7;
        expect(maxProfit(nums)).toStrictEqual(expected)
    });

    it('case 2', function () {
        const nums = [1, 2, 3, 4, 5];
        const expected = 4;
        expect(maxProfit(nums)).toStrictEqual(expected)
    });

    it('case 3', function () {
        const nums = [7, 6, 4, 3, 1];
        const expected = 0;
        expect(maxProfit(nums)).toStrictEqual(expected)
    });

    it('just test', function () {
        const prices = [7, 1, 5, 3, 6, 4];
        console.log(maxProfit(prices));;
    });
});

function maxProfit(prices) {
    // let n = prices.length;
    // if (n <= 1) {
    //     return 0;
    // }
    // let d;
    // let max = 0;
    // for (let i = 0; i < n; i++) {
    //     d = prices[i] - prices[i - 1];
    //     if (d > 0) {
    //         max += d;
    //     }
    // }
    // return max;

    let profit = 0
    let len = prices.length
    for(let i = 1; i < len; ++i) {
        profit += Math.max(0, prices[i] - prices[i - 1])
    }

    return profit
}
