describe("containsDuplicate", () => {
    it('case 1', function () {
        const nums = [1, 2, 3, 1];
        const expected = true;
        expect(containsDuplicate(nums)).toStrictEqual(expected)
    });

    it('case 2', function () {
        const nums = [1, 2, 3, 4];
        const expected = false;
        expect(containsDuplicate(nums)).toStrictEqual(expected)
    });

    it('case 3', function () {
        const nums = [1, 1, 1, 3, 3, 4, 3, 2, 4, 2];
        const expected = true;
        expect(containsDuplicate(nums)).toStrictEqual(expected)
    });

    it('just test', function () {
        const nums = [1, 2, 3, 4, 5, 6, 7];
        console.log(containsDuplicate(nums));
    });
});

function containsDuplicate(nums) {
    // let newVar = [...new Set(nums)];
    // return newVar.length !== nums.length;

    nums.sort((a, b) => a - b);
    for (let i = 1; i < nums.length; i++) {
        if (nums[i] === nums[i - 1]) {
            return true;
        }
    }
    return false;

}
