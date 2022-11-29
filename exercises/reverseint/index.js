// --- Directions
// Given an integer, return an integer that is the reverse
// ordering of numbers.
// --- Examples
//   reverseInt(15) === 51
//   reverseInt(981) === 189
//   reverseInt(500) === 5
//   reverseInt(-15) === -51
//   reverseInt(-90) === -9

function reverseInt(n) {
    const isPositive = n > 0
    const number = parseInt(Math.abs(n).toString().split("").reverse().join(""))

    return isPositive ? number : n === 0 ? 0 : -number
}

module.exports = reverseInt
