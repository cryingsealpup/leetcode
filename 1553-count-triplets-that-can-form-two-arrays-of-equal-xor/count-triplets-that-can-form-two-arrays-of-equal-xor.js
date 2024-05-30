/**
 * @param {number[]} arr
 * @return {number}
 */
var countTriplets = function(arr) {
    const len = arr.length;
    const prefixes = Array.from({ length: len }, (v) => 0);
    let counter = 0;

    for (let i = 0; i < len; i += 1) {
        prefixes[i + 1] = prefixes[i] ^ arr[i];
    }

    for (let i = 0; i < len; i += 1) {
        for (let j = i + 1; j < len; j += 1) {
            for (let k =j; k < len; k += 1) {
                counter += prefixes[j] ^ prefixes[i] == prefixes[k+1] ^ prefixes[j] ? 1 : 0;
            }
        }
    }

    return counter;
};