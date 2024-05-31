/**
 * @param {number[]} nums
 * @return {number[]}
 */
var singleNumber = function(nums) {
    const xor = nums.reduce((acc, el) => acc ^= el, 0);
    let xorLeft = 0;
    let xorRight = 0;
    let markedIndex = 0;

    while(((xor >> markedIndex) & 1) !== 1) {
        markedIndex += 1;
    }

    for (const num of nums) {
        if (((num >> markedIndex) & 1) === 1) {
            xorLeft ^= num;
        } else xorRight ^= num;
    }

    return [xorLeft, xorRight];
};