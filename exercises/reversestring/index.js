// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

function reverse(str) {
    let reverseStr = ""
    // get length of string and start a for loop
    for (let i = str.length; i > -1; i--) {
        const lastLetter = str.charAt(i)
        reverseStr += lastLetter
    }
    return reverseStr
}

module.exports = reverse
