// --- Directions
// Given an array and chunk size, divide the array into many subarrays
// where each subarray is of length size
// --- Examples
// chunk([1, 2, 3, 4], 2) --> [[ 1, 2], [3, 4]]
// chunk([1, 2, 3, 4, 5], 2) --> [[ 1, 2], [3, 4], [5]]
// chunk([1, 2, 3, 4, 5, 6, 7, 8], 3) --> [[ 1, 2, 3], [4, 5, 6], [7, 8]]
// chunk([1, 2, 3, 4, 5], 4) --> [[ 1, 2, 3, 4], [5]]
// chunk([1, 2, 3, 4, 5], 10) --> [[ 1, 2, 3, 4, 5]]

function chunk(array, size) {
    const result = []
    //calculate # of chunks
    const numberOfChunks = Math.round(array.length / size)
    console.log(array, size, numberOfChunks)
    let start = 0
    let end = size
    for (let i = 0; i < numberOfChunks; i++) {
        result.push(array.slice(start, end))
        start = end
        end = start + size
    }
    return result
}

module.exports = chunk
