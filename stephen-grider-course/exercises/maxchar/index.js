// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

//!Second attempt
function maxChar(str) {
    const charMap = {}
    let maxChar = ""
    let max = 0

    //create char map
    for (let char of str) {
        charMap[char] = charMap[char]++ || 1
    }
    /* 
    * loop through object
    ? char is the charMap character
    ? charMap[char] returns the charMap value
    */
    for (const char in charMap) {
        if (charMap[char] > max) {
            max = charMap[char]
            maxChar = char
        }
    }

    return maxChar
}

module.exports = maxChar

// !My First Attempt
// function maxChar(str) {
//     const chars = {}

//     for (let char of str) {
//         chars[char] = chars[char] + 1 || 1
//     }

//     const maxCount = Math.max(...Object.values(chars))

//     for (const [key, value] of Object.entries(chars)) {
//         if (value === maxCount) {
//             return key
//         }
//     }
// }
