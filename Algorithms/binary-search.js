// module.exports = (nums, targetValue) => {
const bs = (nums, targetValue) => {
  let start = 0
  let end = nums.length - 1
  if (targetValue < nums[start] || targetValue > nums[end]) return -1
  if (targetValue === nums[end]) return end
  if (targetValue === nums[start]) return start
  while (start < end) {
    const middle = (end + start) >> 1
    const midValue = nums[middle]
    if (targetValue === midValue) return middle
    else if (targetValue > midValue) {
      start = middle + 1
    } else {
      end = middle
    }
  }
  return -1
}

console.log(bs([1, 2, 3, 4, 6], 2))
