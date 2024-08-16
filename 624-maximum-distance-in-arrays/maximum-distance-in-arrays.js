/**
 * @param {number[][]} arrays
 * @return {number}
 */
var maxDistance = function(arrays) {
    const maxs = [];
    const mins = [];
    arrays.forEach((el) => {
        maxs.push(el[el.length - 1]);
        mins.push(el[0]);
    });

    let min = Math.min(...mins);
    let max = Math.max(...maxs);
    let diff = Math.abs(max - min);
    if (maxs.indexOf(max) === mins.indexOf(min)) {
        maxs.splice(maxs.indexOf(max), 1);
        mins.splice(mins.indexOf(min), 1);
        diff = Math.max(Math.max(...maxs) - min, max - Math.min(...mins));
    }
    return diff;
};