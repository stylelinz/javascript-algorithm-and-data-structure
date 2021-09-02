function validAnagram (str1, str2) {
  // add whatever parameters you deem necessary - good luck!
  if (str1 === str2) {
    return true
  }
  if (str1.length !== str2.length) {
    return false
  }
  const strCounter1 = counterGen(str1)
  const strCounter2 = counterGen(str2)
  function counterGen (str) {
    const counter = {}
    for (const char of str) {
      counter[char] = (counter[char] || 0) + 1
    }
    return counter
  }
  for (const char in strCounter1) {
    if (strCounter1[char] !== strCounter2[char]) {
      return false
    }
  }
  return true
}

console.log(validAnagram('car', 'rat'))
