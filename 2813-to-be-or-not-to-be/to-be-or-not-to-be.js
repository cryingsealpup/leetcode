/**
 * @param {string} val
 * @return {Object}
 */
var expect = function(val) {
    return {
        toBe: (v) => {
            if (val !== v) throw "Not Equal";
            return val === v;
        },
        notToBe: (v) => {
            if (val === v) throw "Equal";
            return val !== v;
        },
    }
};

/**
 * expect(5).toBe(5); // true
 * expect(5).notToBe(5); // throws "Equal"
 */