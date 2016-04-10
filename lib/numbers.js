"use strict";

const pad = require('./pad');

module.exports = {
    sumBigNumbers: sumBigNumbers,
    multiplyBigNumbers: multiplyBigNumbers
};

function sumBigNumbers(number1, number2) {
    // Already add one since the last digit may have an extra digit carried over
    let maxLength = Math.max(number1.length, number2.length) + 1;
    let sum = [];
    let carryOver = 0;

    for (let i = 1; i < maxLength; i++) {
        let digit1 = +number1[number1.length - i] || 0;
        let digit2 = +number2[number2.length - i] || 0;

        let digitSum = digit1 + digit2 + carryOver;

        if (digitSum > 9) {
            carryOver = 1;
        } else {
            carryOver = 0;
        }

        sum.unshift((digitSum + '').slice(-1));
    }

    if (carryOver) {
        sum.unshift(carryOver);
    }

    return sum.join('');
}

function multiplyBigNumbers(number1, number2) {
    number1 = (number1 + '');
    number2 = (number2 + '');

    if (number1.length > number2.length) {
        return doMultiply(number1, number2);
    } else {
        return doMultiply(number2, number1);
    }

    function doMultiply(longerNumber, shorterNumber) {
        let sum = [];
        let length = shorterNumber.length;

        for (let i = 0; i < length; i++) {
            let currentDigit = shorterNumber[shorterNumber.length - i -1];

            sum.push(pad.rightPad(multiplySingleBigNumber(longerNumber, currentDigit), i));
        }

        return sum.reduce((memo, number) => sumBigNumbers(memo, number), '');
    }
}

// Multiplies a bigNumber by a non bigNumber, i.e '123456123456712562345678456789' * 2;
// It loses precision when multiplying 2 bigNumbers.
// To properly multiply two big numbers, we need to multiply one big number by each digit of the other big number
// and sum all the products. This is done in multiplyBigNumbers
function multiplySingleBigNumber(bigNumber, by) {
    // Already add one since the last digit may have an extra digit carried over
    bigNumber = (bigNumber + '');
    let maxLength = bigNumber.length + 1;
    let product = [];
    let carryOver = 0;

    for (let i = 1; i < maxLength; i++) {
        let digit = +bigNumber[bigNumber.length - i];

        let digitProduct = digit * by + carryOver;

        if (digitProduct > 9) {
            carryOver = Math.floor(digitProduct / 10);
        } else {
            carryOver = 0;
        }

        product.unshift(digitProduct % 10);
    }

    if (carryOver) {
        product.unshift(carryOver);
    }

    return product.join('');
}