//Starting with the number 1 and moving to the right in a clockwise direction a 5 by 5 spiral is formed as follows:
//
//21 xx xx xx 25
//xx 07 xx 09 xx
//xx xx 01 xx xx
//xx 05 xx 03 xx
//17 xx xx xx 13           101 with 9 nums
//
//73 xx xx xx xx xx xx xx 81
//xx 43 xx xx xx xx xx 49 xx
//xx xx 21 xx xx xx 25 xx xx
//xx xx xx 07 xx 09 xx xx xx
//xx xx xx xx 01 xx xx xx xx
//xx xx xx 05 xx 03 xx xx xx
//xx xx 17 xx xx xx 13 xx xx
//xx 37 xx xx xx xx xx 31 xx
//65 xx xx xx xx xx xx xx 57  537 with 17 nums
//
//It can be verified that the sum of the numbers on the diagonals is 101.
//numbers 1 3  5  7  9 13 17 21 25 31 37 43 49 57 = 318
//         +2 +2 +2 +2 +4 +4 +4 +4 +6 +6 +6 +6 +8
// row    0 1  1  1  1  2  2  2  2  3  3  3  3  4 ...
// so:    1+   4x2     +   4x4    +     4x6    + .....
//        1+   4x2x1   +   4x2x2 +      4x2x3  + ....

// grid size : nb of numbers
// 1x1 : 1
// 3x3 : 5
// 5x5 : 9
// 7x7 : 13
// 9x9: 17

// we're adding 4 numbers every time we add an outer circle: 1: 1, +1: 5, +1: 9, +1 13

//What is the sum of the numbers on the diagonals in a 1001 by 1001 spiral formed in the same way?

// 5x5 square = 5*2 - 1 numbers
// 1001x1001 square = 1001 * 2 - 1 numbers

"use strict";

function *nthNumber() {
    let total = 1;
    let i = 0;

    while (true) {
        total+= 2 * Math.ceil(i/4);
        yield total;
        i++;
    }
}


function sumNthNumber(n) {
    let getNumber = nthNumber();
    let total = 0;

    while (n--) {
        total += getNumber.next().value;
    }

    return total;
}


function solve(gridWidth) {
    let nbOFNumbers = gridWidth * 2 - 1;

    return sumNthNumber(nbOFNumbers);
}

console.log(solve(3)); // 25
console.log(solve(5)); // 101
console.log(solve(9)); // 537
console.log(solve(1001)); // 8x8

