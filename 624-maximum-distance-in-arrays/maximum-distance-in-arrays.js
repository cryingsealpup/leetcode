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
        let diffMax = Math.max(...maxs.splice(maxs.indexOf(max), 1)) - min;
        let diffMin = max - Math.min(...mins.splice(mins.indexOf(min), 1));
        diff = Math.max(Math.abs(Math.max(...maxs.splice(maxs.indexOf(max), 1)) - min), Math.abs(max - Math.min(...mins.splice(mins.indexOf(min), 1))));
    }
    return diff;
};