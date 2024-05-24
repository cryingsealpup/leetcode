/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    const result = [];
    for (let i = 0; i< nums.length; i ++) {
        const pair = nums.findIndex((el, ind) => ind !== i && target - nums[i] === el);
        if (pair !== -1) {
            result.push(i, pair);
            break;
        }
    }
    return result;
};