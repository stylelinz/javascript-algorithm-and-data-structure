class HashTable {
  constructor(size = 17) {
    this.keyMap = Array.from({ length: size }, () => [])
  }

  _hash (key) {
    let total = 0
    const WEIRD_PRIME = 31
    for (let i = 0; i < Math.min(key.length, 100); i++) {
      const char = key[i]
      // map 'a' to 1, 'b' to 2, 'z' to 26, etc.
      const value = char.charCodeAt(0) - 96
      total = (total * WEIRD_PRIME + value) % this.keyMap.length
    }
    return total
  }

  set (key, value) {
    const hash = this._hash(key)
    this.keyMap[hash].push([key, value])
  }

  get (key) {
    const index = this._hash(key)
    if (this.keyMap[index]) {
      for (let i = 0; i < this.keyMap[index].length; i++) {
        if (this.keyMap[index][i][0] === key) {
          return this.keyMap[index][i]
        }
      }
    }
  }

  values () {
    const valuesArr = []
    for (let i = 0; i < this.keyMap.length; i++) {
      if (this.keyMap[i]) {
        for (let j = 0; j < this.keyMap[i].length; j++) {
          if (!valuesArr.includes(this.keyMap[i][j][1])) {
            valuesArr.push(this.keyMap[i][j][1])
          }
        }
      }
    }
    return valuesArr
  }

  keys () {
    const keysArr = []
    for (let i = 0; i < this.keyMap.length; i++) {
      if (this.keyMap[i]) {
        for (let j = 0; j < this.keyMap[i].length; j++) {
          if (!keysArr.includes(this.keyMap[i][j][0])) {
            keysArr.push(this.keyMap[i][j][0])
          }
        }
      }
    }
    return keysArr
  }
}

const ht = new HashTable()
ht.set('maroon', '#800000')
ht.set('yellow', '#FFFF00')
ht.set('pink', '#222334')
ht.set('hay', '#222334')
ht.set('blue', '#0000FF')
console.log(ht.values())
