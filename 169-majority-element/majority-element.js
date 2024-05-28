/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
    return [...new Set(nums)].reduce((acc, curr) => {
        const len = nums.filter((el) => el === curr).length;
        return len > acc[1] ? [curr, len] : acc;
        }, [0, 0]
    )[0]
};