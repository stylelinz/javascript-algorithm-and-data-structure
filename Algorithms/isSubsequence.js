/* iterative way (time: O(n), space: O(1)) */
// module.exports = (str1, str2) => {
//   // if there's no argument at str1 or str2, return false (no args)
//   if (!str1 || !str2) return false
//   // set two pointers for two strings (ptr1, ptr2)
//   let pointer = 0
//   for (const char2 of str2) {
//     if (char2 === str1[pointer]) {
//       // if two pointers are point the same value, move ptr1 to next.
//       pointer++
//     }
//     // otherwise, just move ptr2 (which is for-loop doing).
//   }
//   // when the loop finished, check the ptr1 is equal to the length of str1 (all chars of str1 are matched).
//   return pointer === str1.length
// }

/* recursive way (time: O(n), space: O(n)) */
const isSubsequence = (str1, str2) => {
  if (str1.length === 0) return true
  if (str2.length === 0) return false
  if (str2[0] === str1[0]) return isSubsequence(str1.slice(1), str2.slice(1))
  return isSubsequence(str1, str2.slice(1))
}
module.exports = isSubsequence
