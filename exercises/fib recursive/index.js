// --- Directions
// Print out the n-th entry in the fibonacci series.
// The fibonacci series is an ordering of numbers where
// each number is the sum of the preceeding two.
// For example, the sequence
//  [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]
// forms the first ten entries of the fibonacci series.
// Example:
//   fib(4) === 3

// program to display fibonacci sequence using recursion
function fib(num) {
    console.log("start", num)
    if (num < 2) {
        console.log("less than 2", num)
        return num
    } else {
        console.log("fib recuses on these two numbers", num - 1, num - 2)
        console.log("sum", num - 1 + num - 2)
        return fib(num - 1) + fib(num - 2)
    }
}

console.log(fib(7))

module.exports = fib
