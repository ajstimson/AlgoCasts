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
}

// const l = new LinkedList()
// l.insertFirst(1)
// l.insertFirst(2)
// l.insertFirst(3)
// l.insertFirst(4)
// l.size()
module.exports = { Node, LinkedList }
