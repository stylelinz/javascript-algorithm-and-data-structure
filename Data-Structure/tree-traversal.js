const bst = require('./binary-search-tree')
const Queue = require('./stack-and-queue')

const bfs = function () {
  const result = []
  const q = new Queue()
  q.enqueue(this.root)
  while (q.size) {
    const curr = q.dequeue()
    result.push(curr.value)
    if (curr.left) q.enqueue(curr.left)
    if (curr.right) q.enqueue(curr.right)
  }
  return result
}

const dfsPre = function () {
  const result = []
  const curr = this.root

  function traversing (node) {
    result.push(node.value)
    if (node.left) traversing(node.left)
    if (node.right) traversing(node.right)
  }

  traversing(curr)
  return result
}

const dfsPost = function () {
  const result = []
  const curr = this.root

  function traversing (node) {
    if (node.left) traversing(node.left)
    if (node.right) traversing(node.right)
    result.push(node.value)
  }

  traversing(curr)
  return result
}

const dfsIn = function () {
  const result = []
  const curr = this.root

  function traversing (node) {
    if (node.left) traversing(node.left)
    result.push(node.value)
    if (node.right) traversing(node.right)
  }

  traversing(curr)
  return result
}

const re = dfsIn.call(bst)
console.log(re)
