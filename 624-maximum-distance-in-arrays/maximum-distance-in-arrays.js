/**
 * @param {number[][]} arrays
 * @return {number}
 */
var maxDistance = function(arrays) {
    let diff = 0;
    const maxs = [];
    const mins = [];
    arrays.forEach((el) => {
        maxs.push(el[el.length - 1]);
        mins.push(el[0]);
    });
    let flag = true;
    let min = Math.min(...mins);
    let max = Math.max(...maxs);
    diff = Math.abs(max - min);
    if (maxs.indexOf(max) === mins.indexOf(min)) {
        maxs.splice(maxs.indexOf(max), 1);
        mins.splice(mins.indexOf(min), 1);
        diff = Math.max(Math.abs(Math.max(...maxs) - min), Math.abs(max - Math.min(...mins)));
    }
    return diff;
};