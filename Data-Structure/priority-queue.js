class Node {
  constructor(value, priority) {
    this.value = value
    this.priority = priority
  }
}

class PriorityQueue {
  constructor() {
    this.values = []
  }

  enqueue (value, priority) {
    const newNode = new Node(value, priority)
    this.values.push(newNode)
    this.bubbleUp()
  }

  bubbleUp () {
    let idx = this.values.length - 1
    const element = this.values[idx]
    while (idx > 0) {
      const parentIdx = (idx - 1) >> 1
      const parent = this.values[parentIdx]
      if (element.priority >= parent.priority) break
      this.values[parentIdx] = element
      this.values[idx] = parent
      idx = parentIdx
    }
  }

  dequeue () {
    const min = this.values[0]
    const end = this.values.pop()
    if (this.values.length) {
      this.values[0] = end
      this.sinkDown()
    }
    return min
  }

  sinkDown () {
    let idx = 0
    const { length } = this.values
    const element = this.values[0]
    while (true) {
      const leftChildIdx = (idx << 1) + 1
      const rightChildIdx = (idx << 1) + 2
      let leftChild, rightChild
      let swap = null
      if (leftChildIdx < length) {
        leftChild = this.values[leftChildIdx]
        if (leftChild.priority < element.priority) {
          swap = leftChildIdx
        }
      }
      if (rightChildIdx < length) {
        rightChild = this.values[rightChildIdx]
        if (
          (!swap && rightChild.priority < element.priority) ||
          (!!swap && rightChild.priority < element.priority)
        ) {
          swap = rightChildIdx
        }
      }
      if (!swap) break
      this.values[idx] = this.values[swap]
      this.values[swap] = element
      idx = swap
    }
  }
}

const er = new PriorityQueue()
er.enqueue('het', 6)
er.enqueue('hoo', 2)
er.enqueue('ca', 3)
console.log(er.values)
er.dequeue()
console.log(er.values)
