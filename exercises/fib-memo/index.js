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
    if (num < 2) {
        return num
    } else {
        return fib(num - 1) + fib(num - 2)
    }
}

function memo(fn) {
    const cache = {}
    return function (args) {
        if (cache[args]) return cache[args]

        const result = fn.apply(this, [args])
        cache[args] = result

        return result
    }
}

fib = memo(fib)

console.log(fib(100))

module.exports = fib
