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

    insertLast(data) {
        const last = this.getLast()
        if (!last) {
            this.head = new Node(data)
        } else {
            last.next = new Node(data)
        }
    }

    getAt(index) {
        let node = this.head
        let count = 0
        while (node) {
            if (count === index) {
                return node
            }

            count++
            node = node.next
        }
        return null
    }

    removeAt(index) {
        let node = this.head
        if (!node) return
        let count = 0
        while (node) {
            if (index === 0) {
                this.head = this.head.next
            }
            if (count === index) {
                const previous = this.getAt(index - 1)
                if (previous) {
                    previous.next = node.next
                }
                return
            }
            count++
            node = node.next
        }
    }

    insertAt(data, index) {
        if (!this.head) {
            this.head = new Node(data)
            return
        }
        if (index === 0) {
            this.head = new Node(data, this.head)
            return
        }
        const previous = this.getAt(index - 1)
        if (previous) {
            previous.next = new Node(data, previous.next)
        } else {
            //out of bounds
            const last = this.getLast()
            last.next = new Node(data, last.next)
        }
    }

    forEach(fn) {
        if (!this.head) return null
        let node = this.head
        let count = 0
        while (node) {
            fn(node, count)
            node = node.next
            count++
        }
    }

    *[Symbol.iterator]() {
        let node = this.head
        while (node) {
            yield node
            node = node.next
        }
    }
}

const l = new LinkedList()
console.log(l.getAt(10))
module.exports = { Node, LinkedList }
