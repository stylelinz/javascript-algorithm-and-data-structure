function merge (arr1, arr2) {
  let ptr1 = 0
  let ptr2 = 0
  const result = []
  while (ptr1 < arr1.length && ptr2 < arr2.length) {
    if (arr1[ptr1] < arr2[ptr2]) {
      result.push(arr1[ptr1++])
    } else {
      result.push(arr2[ptr2++])
    }
  }
  const rest = ptr1 < arr1.length ? arr1.slice(ptr1) : arr2.slice(ptr2)

  return result.concat(rest)
}

function mergeSort (arr) {
  if (arr.length <= 1) return arr
  const mid = arr.length >> 1
  const left = mergeSort(arr.slice(0, mid))
  const right = mergeSort(arr.slice(mid))
  return merge(left, right)
}

console.log(mergeSort([1, 10, 50, 2, 14, 99, 100]))
