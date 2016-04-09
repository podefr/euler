https://projecteuler.net/problem=10

function buildPrimesBelow(n) {
    var primes = [2];
    var i = 3;
    var isPrime;

    while (i < n) {
        isPrime = !primes.some(function (prime) {
            return !(i % prime);
        });

        if (isPrime) {
            primes.push(i);
        }

        i++;
    }

    return primes.reduce(function (memo, prime) {
        return memo + prime;
    }, 0);
}

console.log(buildPrimesBelow(10));
console.log(buildPrimesBelow(2e6));