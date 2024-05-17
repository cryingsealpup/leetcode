/**
 * @param {number} n
 * @return {Function} counter
 */
var createCounter = function(n) {
    let times = -1;
    return () => {
        times += 1;
        return n + times;
    };
};

/** 
 * const counter = createCounter(10)
 * counter() // 10
 * counter() // 11
 * counter() // 12
 */