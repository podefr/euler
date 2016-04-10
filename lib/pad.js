"use strict";

function generateString(length, char) {
    let padArray = [];

    padArray.length = length + 1;

    return padArray.join(char);
}

module.exports = {
    leftPad: function leftPad(string, length) {
        return generateString(length, '0') + string;
    },

    rightPad: function rightPad(string, length) {
        return string + generateString(length, '0');
    }
};