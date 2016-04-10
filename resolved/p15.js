// https://projecteuler.net/problem=15

// "rrdd" "rdrd" "rddr" "drrd" "drdr" "ddrr"
// 2x2 grid you have 2r and 2d
// C(4,2) = 6

// we want 20x20 grid so that's 20r and 20d
// count the combinations for 20r, 20d in a 40 length string

// we could say we have a 40 length string of "r"
// we need to drop 20 "d" in the string
// first try we have 40 possibilities
// second try we have 39 possibilities left... so that's 40!/20!
// but we need to remove the duplicates which are another 20!
// so we get 40!/20!/20! or C(40, 20) = 137846528820 using the Combination Formula

// Let's generate all the unique combinations:

