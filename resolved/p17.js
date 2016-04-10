// https://projecteuler.net/problem=17
"use strict";

let numbersToWords = [];
numbersToWords[1] = "one";
numbersToWords[2] = "two";
numbersToWords[3] = "three";
numbersToWords[4] = "four";
numbersToWords[5] = "five";
numbersToWords[6] = "six";
numbersToWords[7] = "seven";
numbersToWords[8] = "eight";
numbersToWords[9] = "nine";
numbersToWords[10] = "ten";
numbersToWords[11] = "eleven";
numbersToWords[12] = "twelve";
numbersToWords[13] = "thirteen";
numbersToWords[14] = "fourteen";
numbersToWords[15] = "fifteen";
numbersToWords[16] = "sixteen";
numbersToWords[17] = "seventeen";
numbersToWords[18] = "eighteen";
numbersToWords[19] = "nineteen";
numbersToWords[20] = "twenty";
numbersToWords[30] = "thirty";
numbersToWords[40] = "forty";
numbersToWords[50] = "fifty";
numbersToWords[60] = "sixty";
numbersToWords[70] = "seventy";
numbersToWords[80] = "eighty";
numbersToWords[90] = "ninety";
numbersToWords[100] = "hundred";
numbersToWords[1000] = "thousand";

function numberToWords(number) {
    if (number <= 20 || (number < 100 && !(number % 10))) {
        return numbersToWords[number];
    }

    if (number < 100) {
        let rest = number % 10;
        return numberToWords(number - rest) + numberToWords(rest);
    }

    if (!(number % 100) && number < 1000) {
        return numbersToWords[Math.floor(number / 100)] + "hundred";
    }

    if (number < 1000) {
        let rest = number % 100;

        return numbersToWords[Math.floor(number / 100)] + "hundredand" + numberToWords(rest);
    }

    if (!(number % 1000)) {
        return numbersToWords[Math.floor(number / 1000)] + "thousand";
    }
}

let length = 0;

for (var i = 1; i <= 1000; i++) {
    length += numberToWords(i).length;
}

console.log(length);

//console.log(numberToWords(1));
//console.log(numberToWords(3));
//console.log(numberToWords(10));
//console.log(numberToWords(13));
//console.log(numberToWords(20));
//console.log(numberToWords(22));
//console.log(numberToWords(30));
//console.log(numberToWords(42));
//console.log(numberToWords(89));
//console.log(numberToWords(100));
//console.log(numberToWords(112));
//console.log(numberToWords(123));
//console.log(numberToWords(345));
//console.log(numberToWords(529));
//console.log(numberToWords(1000));

