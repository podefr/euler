// https://projecteuler.net/problem=1

var multiplesOf = [3, 5];

function sumOfMultiples(maxNumber) {
    var sum = 0;

    for (var i = 0; i < maxNumber; i++) {
        if (isMultiple(i)) {
            sum += i;
        }
    }

    return sum;
}

function isMultiple(number) {
    return multiplesOf.some(function (multiple) {
        return !(number % multiple);
    });
}

console.log(sumOfMultiples(1000));