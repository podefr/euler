// https://projecteuler.net/problem=196

// https://en.wikipedia.org/wiki/Miller%E2%80%93Rabin_primality_test

var primes = [2, 3, 5, 11, 13, 17, 23, 1662803];

function S(n) {
    var primesInTriplets = getPrimesInTriplets(n);
    console.log(primesInTriplets);
    return primesInTriplets.reduce(function (memo, prime) {
        return memo += prime;
    }, 0);
}

console.log(S(9));

function getRow(lineNumber) {
    var firstNumber = getStartingNumber(lineNumber);
    var numbers = [];

    for (var i = 0; i < lineNumber; i++) {
        numbers[i] = isPrime(firstNumber + i) ? firstNumber + i : -1;
    }

    return numbers;
}

function getStartingNumber(lineNumber) {
    var num = 1;

    for (var i = 0; i < lineNumber; i++) {
        num += i;
    }

    return num;
}

function getPrimesInTriplets(row) {
    var primesInTriplet = [];
    var from = getStartingNumber(row);

    for (var i = 0; i < row; i++) {
        if (isPrime(from + i) && isPrimeInTriplet(from + i, row, i)) {
            primesInTriplet.push(i);
        }
    }

    return primesInTriplet;
}

// Got to come up with a nice algorithm to find triples in a 9x9 matrix. The matrix can be generated using simple Maths
function isPrimeInTriplet(primeNumber, row, index) {
    var matrix = [ isPrime(primeNumber - row - 2), isPrime(primeNumber - row - 1), isPrime(primeNumber - row),
        isPrime(primeNumber - 1) , true, isPrime(primeNumber + 1),
        isPrime(primeNumber + row - 1), isPrime(primeNumber + row), isPrime(primeNumber + row + 1)];

    if (matrix.filter(function (boolPrime) { return boolPrime }).length === 3) {
        return true;
    } else {
        // try again in the matrix around each prime in the previous array
    }
}

function isPrime(number) {
    return !primes.some(function (prime) {
        if (prime === number) return false;
        return !(number % prime);
    });
}