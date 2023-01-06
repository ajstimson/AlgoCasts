// --- Directions
// Given the root node of a tree, return
// an array where each element is the width
// of the tree at each level.
// --- Example
// Given:
//     0
//   / |  \
// 1   2   3
// |       |
// 4       5
// Answer: [1, 3, 2]

function levelWidth(root) {
    //level array includes null to identify start of new level
    const level = [root, null]
    //counts number of width units
    let lvlCount = 0

    //widths array will return the
    const widths = []
    //sets return array index
    let i = 0

    while (level.length !== 1) {
        //get first node item
        const node = level.shift()

        if (!node) {
            //if null iterate width array index
            i++
            //push null to back of array
            level.push(node)
            //reset level width unit count
            lvlCount = 0
        } else {
            //iterate level width unit count
            lvlCount++
            //update widths index to count
            widths[i] = lvlCount
            //if there are children push them to the back of the level array
            node?.children && level.push(...node.children)
        }
    }
    return widths
}

module.exports = levelWidth
