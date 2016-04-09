// https://projecteuler.net/problem=5

function findNumber(maxInt) {
    var ints = [];

    for (var i = 2; i <= maxInt; i++) {
        ints.push(i);
    }

    function divisibleByAll(number) {
        return ints.every(function (int) {
            return !(number % int);
        });
    }

    while (!divisibleByAll(maxInt)) {
        maxInt++;;
    }

    return maxInt
}

console.log(findNumber(10));
console.log(findNumber(20));