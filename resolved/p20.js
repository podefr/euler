"use strict";

var multiplyBigNumbers = require('../lib/numbers.js').multiplyBigNumbers;

function factorial(n) {
    if (n === 0) {
        return 1;
    }

    return multiplyBigNumbers(n, factorial(n-1));
}

console.log(factorial(100).split('').reduce((sum, digit) => sum + +digit, 0));

