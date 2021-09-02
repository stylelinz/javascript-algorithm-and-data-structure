module.exports = (nums, targetAvg) => {
  // check the array is empty, if it's, return false.
  if (!nums.length) return false
  // create two pointers (ptr1, ptr2), starts from beginning and end.
  let ptr1 = 0
  let ptr2 = nums.length - 1
  while (ptr1 < ptr2) {
    const average = (nums[ptr1] + nums[ptr2]) / 2
    // loop until the average match target value (return true), or ptr1 equal or greater to ptr2 (return false).
    if (average === targetAvg) return true
    if (average > targetAvg) {
      // if the average of pointers' values is greater than target value, move ptr2 to the previous.
      ptr2--
    } else {
      // if the average is less than target value, move ptr1 to the next.
      ptr1++
    }
  }
  return false
}
