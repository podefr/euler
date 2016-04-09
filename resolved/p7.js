https://projecteuler.net/problem=7

function buildPrimes(n) {
    var primes = [2];
    var i = 3;
    var isPrime;

    while (primes.length < n) {
        isPrime = !primes.some(function (prime) {
            return !(i % prime);
        });

        if (isPrime) {
            primes.push(i);
        }

        i++;
    }

    return primes.pop();
}

console.log(buildPrimes(6));
console.log(buildPrimes(10001));

