class Node {
  constructor(val) {
    this.val = val
    this.next = null
  }
}

class SinglyLinkedList {
  constructor() {
    this.head = null
    this.tail = null
    this.length = 0
  }

  push (val) {
    const newNode = new Node(val)
    if (!this.head) {
      this.head = newNode
      this.tail = newNode
    } else {
      this.tail.next = newNode
      this.tail = newNode
    }
    this.length++
    return this
  }

  pop () {
    if (!this.tail) return
    let currNode = this.head
    let lastNode = currNode
    while (currNode.next) {
      lastNode = currNode
      currNode = currNode.next
    }
    lastNode.next = null
    this.tail = lastNode
    this.length--
    if (!this.length) {
      this.head = null
      this.tail = this.head
    }
    return currNode.val
  }

  shift () {
    if (!this.head) return
    const oldHead = this.head
    this.head = oldHead.next
    this.length--
    if (!this.length) this.tail = null
    return oldHead.val
  }

  unshift (val) {
    const newNode = new Node(val)
    if (!this.head) {
      this.head = newNode
      this.tail = newNode
    } else {
      newNode.next = this.head
      this.head = newNode
    }
    this.length++
    return this
  }

  get (index) {
    if (index < 0 || index >= this.length) return null
    let currNode = this.head
    for (let i = 0; i < index; i++) {
      currNode = currNode.next
    }
    return currNode
  }

  set (index, value) {
    const currNode = this.get(index)
    if (!currNode) return false
    currNode.val = value
    return true
  }

  insert (index, value) {
    if (index < 0 || index > this.length || index === undefined) return false
    if (index === this.length) {
      this.push(value)
      return true
    }
    if (index === 0) {
      this.unshift(value)
      return true
    }

    const newNode = new Node(value)
    const prevNode = this.get(index - 1)
    const temp = prevNode.next
    newNode.next = temp
    prevNode.next = newNode
    this.length++
    return true
  }

  remove (index) {
    if (index < 0 || index >= this.length) return
    if (index === this.length - 1) return this.pop()
    if (index === 0) return this.shift()
    const prevNode = this.get(index - 1)
    const removedNode = prevNode.next
    prevNode.next = removedNode.next
    this.length--
    return removedNode.val
  }

  reverse () {
    const tail = this.tail
    this.tail = this.head
    this.head = tail
    let curr = this.tail
    let prev = null
    let oldNext
    while (curr !== null) {
      oldNext = curr.next
      curr.next = prev
      prev = curr
      curr = oldNext
    }
    return this
  }
}

const sll = new SinglyLinkedList()
sll.push('hi')
sll.push('there')
sll.push('how')
sll.push('are')
sll.push('you')
sll.reverse()
console.log(sll)
