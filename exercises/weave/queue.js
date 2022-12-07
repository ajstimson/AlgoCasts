// --- Directions
// Implement a 'peek' method in this Queue class.
// Peek should return the last element (the next
// one to be returned) from the queue *without*
// removing it.

class Queue {
    constructor() {
        this.data = []
    }
    add(record) {
        this.data.unshift(record)
    }

    remove() {
        console.log("remove", this.data)
        return this.data.pop()
    }

    peek() {
        console.log("peek", this.data)
        return this.data[this.data.length - 1]
    }
}

module.exports = Queue
