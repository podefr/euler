// https://projecteuler.net/problem=19
"use strict";

// How many sundays fell on the first of the month between 1 Jan 1901 to 31 Dec 2000?

let months = [31, -1, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

function isLeapYear(year) {
    // it's a century and its divisible by 400
    if (!(year % 100)) {
        if (!(year % 400)) {
            return true;
        } else {
            return false;
        }
    }

    // it's a leap year
    if (!(year % 4)) {
        return true;
    }

    // any other year
    return false;
}

function getNumberOfDays(year) {
    if (isLeapYear(year)) {
        return 366;
    } else {
        return 365;
    }
}

function getNumberOfDaysInMonth(year, month) {
    let numberOfDays = months[month];

    if (numberOfDays === -1) {
        return isLeapYear(year) ?  29 : 28;
    }

    return numberOfDays;
}

// there is a sunday every 7 days
function getNumberOfSundays() {
    let numberOfSundays = 0;
    // without offset, it's assumed that the 1st jan of 1901 was a Sunday.
    // with the offset, it's a Monday if offset 1, Tuesday if offset is 2...
    // The first of Jan 1901 was a Tuesday
    var offset = 2;

    for (let year = 1901; year < 2001; year++) {
        for (let month = 0; month < 12; month++) {
            if (offset === 0) {
                numberOfSundays++;
            }

            offset = (offset + (getNumberOfDaysInMonth(year, month) % 7)) % 7;
        }
    }

    return numberOfSundays;
}

console.log('number of Sundays in century that fell on a 1st', getNumberOfSundays());

