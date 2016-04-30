"use strict";

const divisorsSums = [];

function findDivisors(n) {
    const divisors = [1];
    for (let i = 2; i < n; i++) {
        if (!(n % i)) divisors.push(i);
    }
    return divisors;
}

function getDivisorsSum(n) {
    if (!divisorsSums[n]) divisorsSums[n] = sumDivisors(findDivisors(n));
    return divisorsSums[n];
}

function sumDivisors(divisors) {
    return divisors.reduce((memo, d) => d + memo, 0);
}

function isAmicableNumber(n) {
    const divisorsSum = getDivisorsSum(n);
    return (n === getDivisorsSum(divisorsSum)) && (n !== divisorsSum);
}

function sumAmicableNumbers(n) {
    let sum = 0;
    for (let i = 0; i < n; i++) {
        if (isAmicableNumber(i)) {
            sum += i;
        }
    }
    return sum;
}

console.log(sumAmicableNumbers(10000));