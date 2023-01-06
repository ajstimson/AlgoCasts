// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

function reverse(str) {
    return str.split("").reduce((acc, char) => char + acc)
}

module.exports = reverse

/* 
    !First Attempt
    function reverse(str) {
    let reverseStr = ""
    
    for (let i = str.length; i > -1; i--) {
        const lastLetter = str.charAt(i)
        reverseStr += lastLetter
    }
        return reverseStr
    }
*/
