class Node {
    constructor(value) {
        this.value = value
        this.next = null
        this.prev = null
    }
}

class DoublyLinkedList {
    constructor(value) {
        const node = new Node(value)
        this.head = node
        this.tail = this.head
        this.length = 1
    }

    
}
