describe("intersect", () => {
    it('case 1', function () {
        const nums1 = [1, 2, 2, 1];
        const nums2 = [2, 2];
        const expected = [2, 2];
        expect(intersect(nums1, nums2)).toStrictEqual(expected)
    });

    it('case 2', function () {
        const nums1 = [4, 9, 5];
        const nums2 = [9, 4, 9, 8, 4];
        const expected = [4, 9];
        expect(intersect(nums1, nums2)).toStrictEqual(expected)
    });


    it('just test', function () {
        const nums1 = [4, 9, 5];
        const nums2 = [9, 4, 9, 8, 4];
        console.log(intersect(nums1, nums2));
    });
});

var intersect = function (nums1, nums2) {
    // 双指针
    let i = 0, j = 0;
    let arr = [];
    // 先排序
    nums1.sort((a, b) => {
        return a - b;
    })
    nums2.sort((a, b) => {
        return a - b;
    })
    while (i < nums1.length && j < nums2.length) {
        // 相同就压入，不同，较小的元素指针往前走
        if (nums1[i] === nums2[j]) {
            arr.push(nums1[i]);
            i++;
            j++;
        } else {
            nums1[i] < nums2[j] ? i++ : j++;
        }
    }
    return arr;
};
