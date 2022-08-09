function removeDuplicates(nums) {

    if (nums == null || nums.length === 0){
        return 0;
    }

    let left = 0;
    for (let right = 0; right < nums.length; right++) {
        if (nums[left] !== nums[right]) {
            nums[++left] = nums[right];
        }
    }

    return ++ left;
    // 返回数组
    // let start = ++ left;
    // nums.splice(start, nums.length - start)
    // return nums;
}


describe("removeDuplicates", () => {
    it('case 1', function () {
        const nums = [1, 1, 2];
        const expected = 2;
        expect(removeDuplicates(nums)).toStrictEqual(expected)
    });

    it('case 2', function () {
        const nums = [0, 0, 1, 1, 1, 2, 2, 3, 3, 4];
        const expected = 5;
        expect(removeDuplicates(nums)).toStrictEqual(expected)
    });

    it('case 2', function () {
        var a = 0;
        var sum = a++ + ++a + --a + ++a + a++ + a--;
        console.log(a);
        console.log(sum);
    });

});
