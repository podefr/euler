function sumLargeNumber(number1, number2) {
    // Already add one since the last digit may have an extra digit carried over
    let maxLength = Math.max(number1.length, number2.length) + 1;
    let sum = [];
    let carryOver = 0;

    for (let i = 1; i < maxLength; i++) {
        let digit1 = +number1[number1.length - i] || 0;
        let digit2 = +number2[number2.length - i] || 0;

        let digitSum = digit1 + digit2 + carryOver;

        if (digitSum > 9) {
            carryOver = 1;
        } else {
            carryOver = 0;
        }

        sum.unshift((digitSum + '').slice(-1));
    }

    if (carryOver) {
        sum.unshift(carryOver);
    }

    return sum.join('');
}