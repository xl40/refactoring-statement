describe("singleNumber", () => {
    it('case 1', function () {
        const nums = [2, 2, 1];
        const expected = 1;
        expect(singleNumber(nums)).toStrictEqual(expected)
    });

    it('case 2', function () {
        const nums = [4, 1, 2, 1, 2];
        const expected = 4;
        expect(singleNumber(nums)).toStrictEqual(expected)
    });


    it('just test', function () {
        const nums = [4, 1, 2, 1, 2];
        console.log(singleNumber(nums));
    });
});

function singleNumber(nums) {
    let ans = 0;
    for (let i = 0; i < nums.length; i++) {
        ans ^= nums[i];
    }
    return ans;
}
