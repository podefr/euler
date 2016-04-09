// https://projecteuler.net/problem=3

// find the largest prime factor of 600851475143

function findLargestPrimeFactor(number, factors) {
    factors = factors || [];

    for (var i = 2; i < number /2; i++) {
        if (isPrimeFactor(number, i)) {
            factors.push(i);
            if (allFactorsFound(factors, number)) {
                break;
            }
        }
    }

    return factors;
}

function isPrimeFactor(number, factor) {
    var isFactor = !(number % factor);
    return isFactor && isPrime(factor);
}

function allFactorsFound(factors, number) {
    return factors.reduce(function (memo, factor) {
        return memo * factor;
    }, 1) === number;
}

var primes = [2];

function isPrime(number) {
    var boolPrime = !primes.some(function (prime) {
        return !(number % prime);
    });

    if (boolPrime) {
        primes.push(number);
    }

    return boolPrime;
}

console.log(findLargestPrimeFactor(13195));
console.log(findLargestPrimeFactor(600851475143));