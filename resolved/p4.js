// https://projecteuler.net/problem=4

// find the largest palindrome from two 3 digits numbers = 999 * 999;

function isPalindrome(number) {
    var string = number + '';

    return string === string.split('').reverse().join('');
}

function getPalindromes(max, palindromes) {
    palindromes = palindromes || [];
    var variable = max;

    if (max < 2) {
        return palindromes;
    }

    // I should stop the loop when max is less than nbOfDigits
    // Also I should do 999 * 999 then 999 * 998, 998 * 998, 997 * 998... instead of listing all possibilities in an array
    // but ...
    while (variable * max--) {
        if (max && isPalindrome(variable * max)) {
            palindromes.push(variable * max);
        }
    }

    return getPalindromes(variable - 1, palindromes);
}

function solve(nbOfDigits) {
    return getPalindromes(Math.pow(10, nbOfDigits) - 1).sort(function (a, b) {
        if (a > b) {
            return 1;
        } else if (a < b) {
            return -1;
        } else {
            return 0;
        }
    }).pop();
}

console.log(solve(2)); // should be 9009
console.log(solve(3)); // should be ?