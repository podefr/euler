"use strict";

const numbers = require("../lib/numbers");

function findFibonacciUntil(condition, n1, n2, index) {
    n1 = n1 || 0;
    n2 = n2 || 1;
    index = index || 1;

    if (condition(n2, index)) return;

    findFibonacciUntil(condition, n2, numbers.sumBigNumbers(n1+"", n2+""), index + 1);
}

findFibonacciUntil(((fibonacci, index) => {
    if (fibonacci.length >= 1000) {
        console.log("found number at index", index);
        return fibonacci;
    }
}));