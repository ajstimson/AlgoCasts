// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

function maxChar(str) {
    const chars = {}

    for (let char of str) {
        chars[char] = chars[char] + 1 || 1
    }

    const maxCount = Math.max(...Object.values(chars))

    for (const [key, value] of Object.entries(chars)) {
        if (value === maxCount) {
            return key
        }
    }
}

module.exports = maxChar
