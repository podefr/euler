"use strict";

const fs = require("fs");

const content = fs.readFileSync("../external/p022_names.txt");
const names = String(content).split(",");
const alphabet = "\"abcdefghijklmnopqrstuvwxyz".split("");

const score = names
    .sort((a, b) => {
        if (a < b) {
            return -1;
        } else if (a === b) {
            return 0;
        } else {
            return 1;
        }
    })
    .map((name) => name.split("").reduce((memo, letter) => memo + alphabet.indexOf(letter.toLowerCase()), 0))
    .reduce((memo, value, index) => memo + value * (index + 1), 0);

console.log(score);
