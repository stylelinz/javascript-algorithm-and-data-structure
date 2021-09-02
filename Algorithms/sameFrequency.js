const sameFrequency = (num1, num2) => {
  // if they're same number, return true without other comparison.
  if (num1 === num2) return true

  // create a counter to store the frequency of num1
  const counter = {}
  for (const num of num1.toString()) {
    counter[num] = (counter[num] || 0) + 1
  }

  // iterate num2
  for (const num of num2.toString()) {
    // when num isn't in counter, directly return false
    if (!counter[num]) return false
    // when num hit the counter, make the frequency minus one.
    counter[num]--
  }

  return true
}

module.exports = sameFrequency
