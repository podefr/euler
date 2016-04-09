//https://projecteuler.net/problem=9

// a2 + b2 = c2
// a + b + c = 1000
// a < b < c
// find abc
"use strict";

function findPythTriplet() {
    // Assumed 200 600 would be a reasonable window, lucky that a was 200
    const min = 200, max = 600;

    for (let i = min; i < max; i++) {
        for (let j = min; j < max; j++) {
            let k = 1000 - i - j;

            if (isTriplet(i, j, k)) {
                console.log(i, j, k, "are the values you're looking for");
                return i * j * k;
            }
        }
    }

    function isTriplet(a, b, c) {
        return Math.pow(a, 2) + Math.pow(b, 2) === Math.pow(c, 2);
    }
}

console.log(findPythTriplet());
