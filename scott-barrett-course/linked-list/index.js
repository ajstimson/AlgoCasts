class Node {
    constructor(value) {
        this.value = value
        this.next = null
    }
}

class LinkedList {
    constructor(value) {
        const node = new Node(value)
        this.head = node
        this.tail = this.head
        this.length = 1
    }

    push(value) {
        const node = new Node(value)

        if (!this.head) {
            this.head = node
            this.tail = node
        } else {
            this.tail.next = node
            this.tail = node
        }
        this.length++
    }

    pop() {
        if (this.length === 0) return undefined
        let temp = this.head
        let pre = this.head
        while (temp.next) {
            pre = temp
            temp = temp.next
        }
        this.tail = pre
        this.tail.next = null
        this.length--
        if (this.length === 0) {
            this.head = null
            this.tail = null
        }
        return temp
    }

    unshift(value) {
        const node = new Node(value)
        if (!this.head) {
            this.head = node
            this.tail = node
        } else {
            node.next = this.head
            this.head = node
        }

        this.length++
        return this
    }

    shift() {
        let item = this.head
        if (!this.head) return undefined
        if (this.length === 1) {
            this.head = null
            this.tail = null
        } else {
            this.head = this.head.next
        }
        this.length--
        return item
    }

    get(index) {
        if (index < 1 || index <= this.length) return undefined
        if (index === 1) return this.head
        let node = this.head
        while (index) {
            node = node.next
            index--
        }
        return node
    }

    set(index, value) {
        let node = this.get(index)

        if (node) {
            node.value = value
            return true
        }
        return false
    }

    insert(index, value) {
        if (index === 0) return this.unshift(value)
        if (index === this.length) return this.push(value)
        if (index < 0 || index >= this.length) return false

        const newNode = new Node(value)
        const node = this.get(index - 1)

        newNode.next = node.next
        node.next = newNode
        this.length++
        return true
    }

    remove(index) {
        if (index === 0) return this.shift()
        if (index === this.length) return this.pop()
        if (index < 0 || index >= this.length) return undefined
        const before = this.get(index - 1)
        let node = before.next

        before.next = node.next
        node.next = null
        this.length--
        return node
    }

    reverse() {
        const temp = this.head
        this.head = this.tail
        this.tail = temp

        let index = this.length
        let start = temp.next
        let previous = null

        while (index) {
            next = temp.next
            temp.next = previous
            previous = temp
            temp = next
            index--
        }
    }
}
