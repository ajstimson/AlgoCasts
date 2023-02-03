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

    push(value) {
        const newNode = new Node(value)

        if (!this.head) {
            this.head = newNode
            this.tail = newNode
        } else {
            this.tail.next = newNode
            newNode.prev = this.tail
            this.tail = newNode
        }
        this.length++
        return this
    }

    pop() {
        if (!this.length === 0) return undefined

        let node = this.tail

        if (this.length === 1) {
            this.head = null
            this.tail = null
        } else {
            this.tail = this.tail.prev
            this.tail.next = null
            node.prev = null
        }
        this.length--

        return node
    }

    unshift(value) {
        let newNode = new Node(value)
        if (this.length === 0) {
            this.head = newNode
            this.tail = newNode
        } else {
            newNode.next = this.head
            this.head.prev = newNode
            this.head = newNode
        }
        this.length++
        return this
    }

    shift() {
        if (this.length === 0) return undefined
        const node = this.head
        if (this.length === 1) {
            this.head = null
            this.tail = null
        } else {
            this.head = this.head.next
            this.head.prev = null
            node.next = null
        }
        this.length--
        return node
    }

    get(index) {
        if (index >= this.length || index < 0) return undefined
        let node = this.head
        let dir = 0
        if (index > this.length / 2) {
            node = this.tail
            dir = 1
            index = this.length - index - 1
        }
        while (index) {
            console.log(node)
            node = dir === 1 ? node.prev : node.next
            index--
        }
        return node
    }

    set(index, value) {
        const temp = this.get(index)

        if (temp) {
            temp.value = value
            return true
        }
        return false
    }

    insert(index, value) {
        if (index < 0 || index > this.length) return false
        if (index === 0) return this.unshift(value)
        if (index === this.length) return this.push(value)

        const node = new Node(value)
        const before = this.get(index - 1)
        const after = before.next

        before.next = node
        node.next = after
        node.prev = before
        after.prev = node
        this.length++
        return true
    }
}

let myDLL = new DoublyLinkedList(0)
myDLL.push(1)
myDLL.push(2)
myDLL.push(3)
myDLL.push(4)
myDLL.push(5)
myDLL.push(6)

console.log(JSON.parse(JSON.stringify(myDLL.get(4).value)))
