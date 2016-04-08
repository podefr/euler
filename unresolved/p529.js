// https://projecteuler.net/problem=529

function flagDigitsInTenSubstring(string, flags, firstCharIndex) {
    var length = string.length,
        currentSubstring;

    flags = flags || [];
    firstCharIndex = firstCharIndex || 0;

    if (length <= 1) return flags.join('');

    for (var i=0; i < length; ++i) {
        currentSubstring = string.slice(0, length - i);

        if (isTenSubstring(currentSubstring)) {
            console.log('marking', currentSubstring, firstCharIndex)
            markDigits(flags, firstCharIndex, currentSubstring.length);
        }
    }

    firstCharIndex++;
    return flagDigitsInTenSubstring(string.slice(1, string.length), flags, firstCharIndex);
}

function isTenSubstring(numberAsString) {
    return numberAsString.split('').reduce(function (memo, digit) {
            return memo += +digit;
        }, 0) === 10;
}

function markDigits(flags, fromIndex, length) {
    for (var i = fromIndex; i < fromIndex + length; i++) {
        flags[i] = 1;
    }
}

function isTenSubstringFriendly(number) {
    var numberAsString = number + '';
    var flags = flagDigitsInTenSubstring(numberAsString);

    return flags.length === numberAsString.length;
}

console.log(isTenSubstringFriendly(3523014));
console.log(isTenSubstringFriendly(28546));