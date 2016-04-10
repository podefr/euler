// https://projecteuler.net/problem=12
"use strict";

function getNumberOfDivisors(number) {
    // automatically add 1, number and (number / 2) if it's even
    let divisors = 2 + !(number % 2);

    let max = Math.ceil(number / 2);

    for (let i = 2; i < max; i++) {
        if (!(number % i)) {
            divisors++;
        }
    }

    return divisors;
}

// brute force algo, takes a while to run.
// options to make it faster are: prime factorisation, or I read something about using the square root as a limit
// but it misses a few factors so I'm missing something there too
function getTriangleNumberWithNDivisors(n) {
    let i = 1;
    let triangleNumber = 1;
    let nbOfDivisors = 0;

    while (i++) {
        triangleNumber += i;
        nbOfDivisors = getNumberOfDivisors(triangleNumber);

        if (nbOfDivisors >= n) {
            return triangleNumber;
        }
    }
}

console.log(getTriangleNumberWithNDivisors(1));
console.log(getTriangleNumberWithNDivisors(2));
console.log(getTriangleNumberWithNDivisors(3));
console.log(getTriangleNumberWithNDivisors(4));
console.log(getTriangleNumberWithNDivisors(5));
console.log(getTriangleNumberWithNDivisors(500));