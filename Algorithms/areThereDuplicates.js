/* naive answer */
// module.exports = (...args) => {
//   // iterate all args, i is the pointer.
//   for (let i = 0; i < args.length - 1; i++) {
//     // iterate the rest of args
//     for (let j = i + 1; j < args.length; j++) {
//       // if i equal to j, return true
//       if (i === j) return true
//     }
//   }
//   return false
// }

/* frequency counter (time: O(n), space: O(n)) */
// module.exports = (...args) => {
//   // create a counter to counting args
//   const counter = {}
//   // iterate array args
//   for (const arg of args) {
//     // if the current argument has already in counter, return true.
//     if (counter[arg]) return true
//     // if it's not, create a key in counter.
//     counter[arg] = 1
//   }
//   // at the end of the loop, if there's nothing happen, return false.
//   return false
// }

/* multiple pointers (time: O(n log n), space: O(1)) */
// module.exports = (...args) => {
//   if (!args?.length) return false
//   // make args in order.
//   args.sort()
//   // create two pointers (ptr1, ptr2), which ptr1 starts from beginning, and ptr2 is always next to ptr1.
//   let ptr1 = 0
//   let ptr2 = 1
//   // iterate args with prt2
//   for (; ptr2 < args.length; ptr1++, ptr2++) {
//     if (args[ptr1] === args[ptr2]) return true
//   }
//   return false
// }

/* one line solution */
module.exports = (...args) => new Set(args).size !== args.length
