class Node {
  constructor(val) {
    this.val = val
    this.next = null
    this.prev = null
  }
}

class DoublyLinkedList {
  constructor() {
    this.head = null
    this.tail = null
    this.length = 0
  }

  push (val) {
    const newNode = new Node(val)
    if (!this.head) {
      this.head = newNode
      this.tail = this.head
    } else {
      this.tail.next = newNode
      newNode.prev = this.tail
      this.tail = newNode
    }
    this.length++
    return this
  }

  pop () {
    if (!this.tail) return
    const oldTail = this.tail
    if (this.length === 1) {
      this.head = null
      this.tail = this.head
    } else {
      this.tail = oldTail.prev
      this.tail.next = null
      oldTail.prev = null
    }
    this.length--
    return oldTail
  }

  shift () {
    if (!this.head) return
    const oldHead = this.head
    if (this.length === 1) {
      this.head = null
      this.tail = this.head
    } else {
      this.head = oldHead.next
      this.head.prev = null
      oldHead.next = null
    }
    this.length--
    return oldHead
  }

  unshift (val) {
    const newNode = new Node(val)
    if (this.length === 0) {
      this.head = newNode
      this.tail = newNode
    } else {
      this.head.prev = newNode
      newNode.next = this.head
      this.head = newNode
    }
    this.length++
    return this
  }

  get (index) {
    if (index < 0 || index >= this.length) return null
    const middle = this.length >> 1
    if (index <= middle) {
      let curr = this.head
      for (let i = 0; i <= middle; i++) {
        if (i === index) return curr
        curr = curr.next
      }
    }
    if (index > middle) {
      let curr = this.tail
      for (let i = this.length - 1; i > middle; i--) {
        if (i === index) return curr
        curr = curr.prev
      }
    }
  }

  set (index, value) {
    const node = this.get(index)
    if (!node) return false
    node.val = value
    return true
  }
}

const dll = new DoublyLinkedList()
dll.push('hi')
dll.push('there')
dll.push('how')
dll.push('are')
dll.push('you')
dll.push('?')
