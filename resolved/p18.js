// https://projecteuler.net/problem=18
"use strict";


const grid = [[75],
[95, 64],
[17, 47, 82],
[18, 35, 87, 10],
[20, 4, 82, 47, 65],
[19, 1, 23, 75, 3, 34],
[88, 2, 77, 73, 7, 63, 67],
[99, 65, 4, 28, 6, 16, 70, 92],
[41, 41, 26, 56, 83, 40, 80, 70, 33],
[41, 48, 72, 33, 47, 32, 37, 16, 94, 29],
[53, 71, 44, 65, 25, 43, 91, 52, 97, 51, 14],
[70, 11, 33, 28, 77, 73, 17, 78, 39, 68, 17, 57],
[91, 71, 52, 38, 17, 14, 91, 43, 58, 50, 27, 29, 48],
[63, 66, 4, 68, 89, 53, 67, 30, 73, 16, 69, 87, 40, 31],
[4, 62, 98, 27, 23, 9, 70, 98, 73, 93, 38, 53, 60, 4, 23]];

// for each row I can either pick the item at index current + 0 or current + 1
// so basically, I want to sum the items found at [0,0,0,0,0,0,0,0...] then [1, 0, 0, 0, 0, 0...]
// and then pick the highest sum. I'll use a bit mask of 0 and 1 of length 15 which is equivalent to 2^15 possibilities


let maxSum = 0;
let maxMask = '';

for (let mask = 0; mask < 32768; mask++) {
    let toBinary = (mask >>> 0).toString(2);
    let padded = leftPad(toBinary, 15);

    let currentSum = getSumForMask(padded);

    if (currentSum > maxSum) {
        maxMask = padded;
        maxSum = currentSum;
    }
}

console.log(maxMask, maxSum);

verifyMask(maxMask);

function verifyMask(mask) {
    let path = 0;

    for (let i = 0; i < 15; i++) {
        path += +mask[i];
        console.log(i, grid[i][path]);
    }
}


function getSumForMask(mask) {
    let path = 0;

    return grid.reduce((memo, row, rowIndex) => {
        path += +mask[rowIndex];
        memo += grid[rowIndex][path];
        return memo;
    }, 0);
}

function leftPad(string, desiredLength) {
    let toAdd = desiredLength - string.length;

    let newArray = [];
    newArray.length = toAdd + 1;

    return newArray.join('0') + string;
}