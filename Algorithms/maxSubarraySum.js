/* for-loop method */
module.exports = (nums, targetLength) => {
  if (nums.length < targetLength) return null
  if (nums.length === targetLength) return nums.reduce((prev, curr) => prev + curr, 0)
  // create a number store the sum of subarray, and a number store the max subarray sum.
  let sum = 0
  let max = 0
  // start the for-loop to iterate nums
  for (let i = 0; i < nums.length; i++) {
    const diff = i - targetLength
    // if current index (i) minus targetLength is less than 0, add nums[i] to sum
    if (diff < 0) sum += nums[i]
    // otherwise, add the difference between nums[diff] and nums[i]
    else sum += (nums[i] - nums[diff])
    max = Math.max(sum, max)
  }
  return max
}
