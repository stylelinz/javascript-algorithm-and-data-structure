module.exports = (nums, targetNum) => {
  // create a number to store the lower bound pointer, and the sum of subarray
  let length = Infinity
  let start = 0
  let sum = 0
  // iterate the nums with for-loop
  for (let i = 0; i < nums.length; i++) {
    // add current number in sum
    sum += nums[i]
    // repeat it until the sum is less than targetNum, or the lower bound exceed the current for-loop index.
    while (start <= i && sum >= targetNum) {
      // if the sum exceed the targetNum, get rid of the lower bound value, and move the pointer to next
      length = Math.min(length, i - start + 1)
      sum -= nums[start++]
    }
  }
  return length === Infinity ? 0 : length
}
