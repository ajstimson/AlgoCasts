// --- Directions
// Implement classes Node and Linked Lists
// See 'directions' document

class Node {
    constructor(data, next = null) {
        this.data = data
        this.next = next
    }
}

class LinkedList {
    constructor(head) {
        this.head = null
    }
    insertFirst(data) {
        this.head = new Node(data, this.head)
    }
    size() {
        let counter = 0
        let node = this.head
        while (node) {
            counter++
            node = node.next
        }
        return counter
    }

    getFirst() {
        return this.head
    }

    getLast() {
        if (!this.head) return null
        let node = this.head
        let last = ""
        while (!last) {
            if (!node.next) {
                last = node
            } else {
                node = node.next
            }
        }
        return last
    }

    clear() {
        this.head = null
    }

    removeFirst() {
        this.head = this.head && this.head.next
    }

    removeLast() {
        if (!this.head) return null
        if (!this.head.next) {
            this.head = null
            return
        }
        let node = this.head.next
        let previous = this.head

        while (previous.next) {
            if (!node.next) {
                previous.next = null
            } else {
                previous = node
                node = node.next
            }
        }
    }
}

// const l = new LinkedList()
// l.insertFirst(1)
// l.insertFirst(2)
// l.insertFirst(3)
// l.insertFirst(4)
// l.size()
module.exports = { Node, LinkedList }
