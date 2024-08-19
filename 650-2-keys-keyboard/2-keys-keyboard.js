function isPrime(number) {
    if (number <= 1) {
        return false;
    }
    for (let i = 2; i < number; i++) {
        if (number % i == 0) {
            return false;
        }
    }
    return true;
}

/**
 * @param {number} n
 * @return {number}
 */
var minSteps = function(n) {
    if (n === 1) return 0;

    let prime = 0;

    for (let i = n - 1; i > 1; i -= 1) {
        if (n % i === 0 && isPrime(i)) {
            prime = i;
            break;
        }
    } 

    if (!prime) {
        return n;
    } else {
        return prime + minSteps(n / prime);
    }


};