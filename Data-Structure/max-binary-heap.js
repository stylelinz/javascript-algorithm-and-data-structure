class MaxBinaryHeap {
  constructor () {
    this.values = []
  }

  insert (value) {
    const { values } = this
    values.push(value)
    let idx = values.length - 1
    let parentIndex = (idx - 1) >> 1
    while (values[parentIndex] < values[idx] && idx > 0) {
      const temp = values[parentIndex]
      values[parentIndex] = values[idx]
      values[idx] = temp
      idx = parentIndex
      parentIndex = (idx - 1) >> 1
    }
  }

  extractMax () {
    const max = this.values[0]
    const end = this.values.pop()
    if (this.values.length) {
      this.values[0] = end
      this.sinkDown()
    }
    return max
  }

  sinkDown () {
    let idx = 0
    const { length } = this.values
    const element = this.values[0]
    while (true) {
      const leftChildIdx = 2 * idx + 1
      const rightChildIdx = leftChildIdx + 1
      let leftChild
      let rightChild
      let swap = null
      if (leftChildIdx < length) {
        leftChild = this.values[leftChildIdx]
        if (leftChild > element) {
          swap = leftChildIdx
        }
      }
      if (rightChildIdx < length) {
        rightChild = this.values[rightChildIdx]
        if (
          (swap === null && rightChild > element) ||
          (swap !== null && rightChild > leftChild)
        ) {
          swap = rightChildIdx
        }
      }
      if (swap === null) break
      this.values[idx] = this.values[swap]
      this.values[swap] = element
      idx = swap
    }
  }
}

const mbh = new MaxBinaryHeap()
mbh.insert(41)
mbh.insert(39)
mbh.insert(33)
mbh.insert(18)
mbh.insert(27)
mbh.insert(12)
mbh.insert(44)
console.log(mbh.values)
mbh.extractMax()
console.log(mbh.values)
// 41, 39, 33, 18, 27, 12
