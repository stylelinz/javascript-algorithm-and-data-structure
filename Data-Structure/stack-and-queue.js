class Node {
  constructor(value) {
    this.value = value
    this.next = null
  }
}

class Stack {
  constructor() {
    this.first = null
    this.last = null
    this.size = 0
  }

  push (value) {
    const created = new Node(value)
    if (!this.size) {
      this.first = created
      this.last = this.first
    } else {
      created.next = this.first
      this.first = created
    }
    return ++this.size
  }

  pop () {
    if (!this.size) return null
    const removed = this.first
    if (this.size === 1) {
      this.last = null
    }
    this.first = removed.next
    this.size--
    return removed.value
  }
}

const stack = new Stack()
stack.push('google')
stack.push('map')
stack.push('Taichill')
stack.push('Trapei')

class Queue {
  constructor() {
    this.first = null
    this.last = null
    this.size = 0
  }

  enqueue (value) {
    const created = new Node(value)
    if (!this.first) {
      this.first = created
      this.last = this.first
    } else {
      this.last.next = created
      this.last = created
    }
    return ++this.size
  }

  dequeue () {
    if (!this.first) return null
    const removed = this.first
    if (this.size === 1) {
      this.last = null
    }
    this.first = removed.next
    this.size--
    return removed.value
  }
}

const q = new Queue()
q.enqueue('a')
q.enqueue('b')
q.enqueue('c')

module.exports = Queue
