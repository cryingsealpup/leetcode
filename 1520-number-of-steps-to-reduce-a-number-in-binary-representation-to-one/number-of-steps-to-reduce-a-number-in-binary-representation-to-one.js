/**
 * @param {string} s
 * @return {number}
 */
var numSteps = function(s) {
    let bin = BigInt(`0b${s}`);
    let counter = 0;
    while (bin !== 1n) {
        counter += 1;
        bin = bin.toString(2).slice(-1) !== '0' ? bin + 1n: bin >> 1n;
    }
    return counter;
};