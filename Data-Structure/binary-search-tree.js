class BinarySearchTree {
  constructor () {
    this.root = null
  }

  insert (value) {
    if (!this.root) {
      this.root = new Node(value)
      return this
    }

    let curr = this.root
    while (curr) {
      if (value === curr.value) return
      else if (value > curr.value) {
        if (!curr.right) {
          curr.right = new Node(value)
          return this
        }
        curr = curr.right
      } else {
        if (!curr.left) {
          curr.left = new Node(value)
          return this
        }
        curr = curr.left
      }
    }
  }

  contains (value) {
    if (!this.root) return false
    let curr = this.root
    while (curr) {
      if (value < curr.value) {
        curr = curr.left
      } else if (value > curr.value) {
        curr = curr.right
      } else {
        return true
      }
    }
    return false
  }
}

class Node {
  constructor (value) {
    this.value = value
    this.left = null
    this.right = null
  }
}

const bst = new BinarySearchTree()
bst.insert(10)
bst.insert(21)
bst.insert(9)
bst.insert(2)
bst.insert(3)
bst.insert(31)
bst.insert(18)
bst.insert(12)

module.exports = bst
