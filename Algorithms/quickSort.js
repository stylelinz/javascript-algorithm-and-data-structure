const swap = (arr, idx1, idx2) => {
  [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]]
}
function pivot (arr, start = 0, end = arr.length + 1) {
  const pivot = arr[start]
  let swapIdx = start
  for (let i = start + 1; i < end; i++) {
    if (pivot > arr[i]) {
      swapIdx++
      swap(arr, swapIdx, i)
    }
  }

  swap(arr, start, swapIdx)
  return swapIdx
}

function quickSort (arr, left = 0, right = arr.length - 1) {
  if (left < right) {
    const pivotIndex = pivot(arr, left, right)
    // left
    quickSort(arr, left, pivotIndex - 1)
    // right
    quickSort(arr, pivotIndex + 1, right)
  }
  return arr
}

console.log(quickSort([-11, 29, 1, 3, 5, 7, 2, 6]))
