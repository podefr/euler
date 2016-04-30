"use strict";

const abundantNumbers = [];

function sum() {
    let sum = 0;

    for (let i = 0; i < 28124; i++) {
        if (!canBeWrittenAsSumOfAbundant(i)) {
            sum += i;
        }
    }

    return sum;
}

function canBeWrittenAsSumOfAbundant(n) {
    var half = Math.floor(n / 2);

    while (half > 11) {
        if (isAbundantNumber(half) && isAbundantNumber(n - half)) {
            return true;
        }

        half--;
    }

    return false;
}

function isAbundantNumber(n) {
    if (typeof abundantNumbers[n] === "undefined") {
        abundantNumbers[n] = computeAbundance(n);
    }

    return abundantNumbers[n];
}

function computeAbundance(n) {
    return sumDivisors(findDivisors(n)) > n;
}

function findDivisors(n) {
    const divisors = [];
    for (let i = 2; i < n; i++) {
        if (!(n % i)) divisors.push(i);
    }
    return divisors;
}

function sumDivisors(divisors) {
    return divisors.reduce((memo, d) => d + memo, 0);
}

console.log(sum());