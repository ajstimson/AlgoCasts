// --- Directions
// Write a function that accepts an integer N
// and returns a NxN spiral matrix.
// --- Examples
//   matrix(2)
//     [[1, 2],
//     [4, 3]]
//   matrix(3)
//     [[1, 2, 3],
//     [8, 9, 4],
//     [7, 6, 5]]
//  matrix(4)
//     [[1,   2,  3, 4],
//     [12, 13, 14, 5],
//     [11, 16, 15, 6],
//     [10,  9,  8, 7]]

function matrix(n) {
    const matrix = generateArray(n).map(() => generateArray(n))

    /*
     *   generate arrays for row and col
     *   start count @ 0
     */
    const result = addRow(matrix, generateArray(n), generateArray(n), 0)

    return result
}
function generateArray(n) {
    //set array values to keys [0,1,2...]
    return [...Array(n).keys()]
}
function addRow(matrix, row, col, count) {
    col.forEach((i) => {
        matrix[row[0]][i] = ++count
    })

    //this is essentially decrementing
    row.shift()

    //base case - keep repeating column generation if col still has length
    if (col.length) {
        return addCol(matrix, row, col.reverse(), count)
    }

    return matrix
}

function addCol(matrix, row, col, count) {
    //loop through row
    row.forEach((i) => {
        matrix[i][col[0]] = ++count
    })
    col.shift()
    //keep repeating row generation if row still has length
    if (row.length) {
        return addRow(matrix, row.reverse(), col, count)
    }

    return matrix
}

module.exports = matrix
