/**
 * @param {number[]} nums
 * @return {number}
 */
var specialArray = function(nums) {
    const len = nums.length;
    for (let i = 0; i <= len; i++) {
        if (i === nums.reduce((acc, curr) => acc + (curr >= i ? 1 : 0), 0)) {
            return i;
        }
    }
    return -1;
};