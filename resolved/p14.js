//https://projecteuler.net/problem=14
"use strict";

function numberOfTerms(from) {
    let chainLength = 1;
    let currentTerm = from;

    while (currentTerm != 1) {
        currentTerm = getNextTerm(currentTerm);
        chainLength++;
    }

    function getNextTerm(term) {
        if (term % 2) {
            return term * 3 + 1;
        } else {
            return term / 2;
        }
    }

    return chainLength;
}


let higherNumber = 0;
let higherLength = 0;

for (let i = 1; i < 1e6; i++) {
    let nbOfTerms = numberOfTerms(i);
    if (nbOfTerms > higherLength) {
        higherLength = nbOfTerms;
        higherNumber = i;
    }
}

console.log(higherLength, higherNumber);