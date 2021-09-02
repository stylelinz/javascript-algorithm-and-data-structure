const getDigit = (num, place) => {
  return ~~(Math.abs(num) / (Math.pow(10, place))) % 10
}

const digitCount = num => {
  if (num === 0) return 1
  return ~~(Math.log10(Math.abs(num))) + 1
}

const mostDigits = nums => {
  let result = 1

  for (let i = 0; i < nums.length; i++) {
    result = Math.max(result, digitCount(nums[i]))
  }

  return result
}

const radixSort = nums => {
  const maxDigit = mostDigits(nums)
  for (let k = 0; k < maxDigit; k++) {
    let digitBuckets = Array.from({ length: 10 }, () => [])
    for (let i = 0; i < nums.length; i++) {
      const digit = getDigit(nums[i], k)
      digitBuckets[digit].push(nums[i])
    }
    nums = [].concat(...digitBuckets)
  }
  return nums
}

console.log(radixSort([23, 12, 432, 4325, 9879, 21934, 4840]))
