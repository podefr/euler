"use strict";

/*

012345 -> pivot is 6
012354 -> pivot is 3
012435 -> pivot is 6
012453 -> pivot is 3
012534 -> pivot is 6
012543 -> pivot is 2
013245 -> pivot is 6
013254 -> pivot is 3
...

543210 -> pivot is -1

1. find the last decreasing suffix, the digit before the suffix is the pivot
2. if the pivot is the length of the string/array, then there's no suffix so we swap the last two digits
3. if the pivot is -1, the entire string is decreasing, so there is no more permutation
4. if there's a pivot, swap the pivot with the smallest digit that's greater than the pivot
5. then reverse the rest after the pivot
 */

function swap(array, i, j) {
    let temp = array[i];
    array[i] = array[j];
    array[j] = temp;
}

function getPivot(array) {
    let firstSuffixDigit = array.length - 1;
    if (array[firstSuffixDigit] > array[firstSuffixDigit - 1]) {
        return array.length;
    }

    while (array[firstSuffixDigit] < array[firstSuffixDigit - 1]) {
        firstSuffixDigit--;
    }

    return firstSuffixDigit -1;
}

function swapLast(array) {
    swap(array, array.length - 1, array.length - 2);
}

function reverseAfterPivot(array, from) {
    const suffix = array.splice(from + 1);

    return array.push(...suffix.reverse());
}

function swapPivot(array, pivotIndex) {
    let swapIndex;

    for (let i = pivotIndex + 1; i < array.length; i++) {
        if (array[i] > array[pivotIndex] && (!swapIndex || array[i] < array[swapIndex])) {
            swapIndex = i;
        }
    }

    if (!swapIndex) {
        throw new Error("No swap index found, there's an issue with this algorithm...");
    }

    swap(array, pivotIndex, swapIndex);
}

function getNextLexicographicPermutation(permutation) {
    const array = permutation.split("");
    const permutationLength = permutation.length;

    const pivot = getPivot(array);

    if (pivot === permutationLength) {
        swapLast(array);
    } else if (pivot === -1) {
        return false;
    } else {
        swapPivot(array, pivot);
        reverseAfterPivot(array, pivot);
    }

    return array.join("");
}


function getPermutation(permutation, nbPermutations) {
    while (nbPermutations--) {
        permutation = getNextLexicographicPermutation(permutation);
    }

    return permutation;
}


console.log(getPermutation("0123456789", 1e6));


