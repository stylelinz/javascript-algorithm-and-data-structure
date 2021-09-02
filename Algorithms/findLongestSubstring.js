module.exports = (str) => {
  if (!str) return 0
  // create a empty lookup table, a counting number, and a max number to return.
  const lookup = {}
  let start = 0
  let max = 0
  // iterate the string
  for (const i in str) {
    const char = str[i]
    if (lookup[char]) {
      // if the current character is already in table, reset the start pointer to the last induplicat charactor
      start = Math.max(start, lookup[char])
    }
    // index - beginning of substring + 1 (include the current in count)
    max = Math.max(max, i - start + 1)
    lookup[char] = i + 1
  }
  return max
}
