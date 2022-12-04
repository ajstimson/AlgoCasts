// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a pyramid shape
// with N levels using the # character.  Make sure the
// pyramid has spaces on both the left *and* right hand sides
// --- Examples
//   pyramid(1)
//       '#'
//   pyramid(2)
//       ' # '
//       '###'
//   pyramid(3)
//       '  #  '
//       ' ### '
//       '#####'

function pyramid(n) {
    for (let i = 0; i < n; i++) {
        //we know that the final pyramid will have 2n+1 blocks so the air should be 2n-1/2-i
        const air = " ".repeat((2 * n - 1) / 2 - i)
        const blocks = "#".repeat(i < 1 ? 1 : 2 * i + 1)
        console.log(air + blocks + air)
    }
}

module.exports = pyramid
