// https://projecteuler.net/problem=2

// Get the sum of the even valued terms in the fibonacci sequence that are under for million

function sumFibonacciTerms(maxNumber, digit1, digit2, sum) {
    sum = sum || 0;

    digit1 = digit1 || 1;
    digit2 = digit2 || 2;

    if (isEven(digit1)) {
        sum += digit1;
    }

    if (digit2 > maxNumber) {
        return sum;
    } else {
        return sumFibonacciTerms(maxNumber, digit2, digit1 + digit2, sum);
    }

}

function isEven(number) {
    return !(number % 2);
}


console.log(sumFibonacciTerms(4e6));
