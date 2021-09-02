function insertionSort (arr) {
  for (let i = 1; i < arr.length; i++) {
    let j = i - 1
    const curr = arr[i]
    for (; j >= 0 && arr[j] > curr; j--) {
      arr[j + 1] = arr[j]
    }
    arr[j + 1] = curr
  }
  return arr
}

console.log(insertionSort([1, 10, 50, 2, 14, 99, 100]))
