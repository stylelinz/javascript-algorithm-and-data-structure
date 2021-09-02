function countUniqueValues (arr) {
  // create a pointer which
  if (arr.length === 0) {
    return 0
  }
  let ptr = 0

  // iterating the array:
  for (const element of arr) {
    if (arr[ptr] !== element) {
      // if they're not equal, bring the pointer to the next position
      ptr++
      // and reassign the element value to where the pointer is in.
      arr[ptr] = element
    }
  }
  // return the ptr1 + 1, as the count of unique numbers.
  return ++ptr
}

console.log(countUniqueValues([1, 1, 1, 1, 1, 2]))
console.log(countUniqueValues([1, 2, 3, 4, 4, 4, 6, 6, 12, 12, 13]))
console.log(countUniqueValues([]))
console.log(countUniqueValues([-2, -1, -1, 0, 1]))
