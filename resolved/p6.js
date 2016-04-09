// https://projecteuler.net/problem=6

function sumOfSquareOfNNatural(n) {
    var sum = 0;

    for (var i = 1; i <= n; i++) {
        sum += Math.pow(i, 2);
    }

    return sum;
}

function squareOfSumOfNatural(n) {
    var sum = (1 + n) * n / 2;

    return sum * sum;
}

function solve(n) {
    return squareOfSumOfNatural(n) - sumOfSquareOfNNatural(n);
}

console.log(solve(10));
console.log(solve(100));