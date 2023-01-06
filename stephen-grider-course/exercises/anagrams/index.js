// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False

function anagrams(stringA, stringB) {
    const stringAMap = createCharacterMap(formatString(stringA))
    const stringBMap = createCharacterMap(formatString(stringB))
    let match = false

    //only run loop if both maps have same length
    if (
        Object.entries(stringAMap).length === Object.entries(stringBMap).length
    ) {
        //loop through first map
        for (let char in stringAMap) {
            //Check if stringBMap has same character & same # of occurrences
            if (char in stringBMap && stringAMap[char] === stringBMap[char]) {
                match = true
            } else {
                //exit loop if false
                return false
            }
        }
    }
    return match
}

const formatString = (str) => {
    return str.replace(/[^\w]/g, "").toLowerCase()
}

const createCharacterMap = (str) => {
    const map = {}
    for (let char of str) {
        map[char] = map[char]++ || 1
    }
    return map
}

module.exports = anagrams
