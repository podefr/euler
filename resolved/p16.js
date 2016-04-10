// https://projecteuler.net/problem=16

// 2^1000 = 2*2*2*2*2*2*2*2*2... one thousand times
// Math.pow(2, 1000) = 1.0715086071862673e+301 but we want the expanded representation
// let's do the maths ourselves
"use strict";

const numbers = require('../lib/numbers');

function powerBigNumber(mantissa, exponent) {
    let result = mantissa;

    if (exponent === 0) {
        return 1;
    }

    for (let i = 1; i < exponent; i++) {
        result = numbers.multiplyBigNumbers(result, mantissa);
    }

    return result;
}

console.log(powerBigNumber(2, 1000).split('').reduce((memo, digit) => memo + +digit, 0));