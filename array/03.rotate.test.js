describe("rotate", () => {
    it('case 1', function () {
        const nums = [1, 2, 3, 4, 5, 6, 7];
        const k = 3;
        const expected = [5, 6, 7, 1, 2, 3, 4];
        expect(rotate(nums, k)).toStrictEqual(expected)
    });

    it('just test', function () {
        const nums = [1, 2, 3, 4, 5, 6, 7];
        const k = 3;
        console.log(rotate(nums, k));
    });
});

function rotate(nums, k) {
    let length = nums.length;
    let temp = new Array(length);

    for (let i = 0; i < length; i++) {
        temp[i] = nums[i];
    }

    for (let i = 0; i < length; i++) {
        nums[(i + k) % length] = temp[i];
    }
    return nums;
}
