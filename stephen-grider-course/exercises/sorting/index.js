// --- Directions
// Implement bubbleSort, selectionSort, and mergeSort

function bubbleSort(arr) {
    let sortCount = 0
    //compare pairs of array values and switch
    for (let i = 0; i < arr.length - 1; i++) {
        const a = arr[i]
        const b = arr[i + 1]
        if (a > b) {
            arr[i] = b
            arr[i + 1] = a

            sortCount++
        }
    }
    if (sortCount === 0) {
        //sorting is done
        return arr
    } else {
        return bubbleSort(arr)
    }
}

function selectionSort(arr) {
    for (let i = 0; i < arr.length; i++) {
        let indexOfMin = i
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[indexOfMin] > arr[j]) {
                indexOfMin = j
            }
            //we've reached the end - time to swap
            if (j === arr.length - 1 && indexOfMin !== i) {
                const previous = arr[i]
                arr[i] = arr[indexOfMin]
                arr[indexOfMin] = previous
            }
        }
    }
    return arr
}

function mergeSort(arr) {
    if (arr.length === 1) return arr
    const center = Math.floor(arr.length / 2)
    const left = arr.slice(0, center)
    const right = arr.slice(center)

    return merge(mergeSort(left), mergeSort(right))
}

function merge(left, right) {
    const merged = []
    while (left.length && right.length) {
        if (left[0] < right[0]) {
            merged.push(left.shift())
        } else {
            merged.push(right.shift())
        }
    }

    return [...merged, ...left, ...right]
}

module.exports = { bubbleSort, selectionSort, mergeSort, merge }
