// JavaScript code goes here

let nums = [1, 2, 3, 4, 5]

nums.push(6) // adds element to end of array (destructive)

nums.unshift(0) // adds element to beginning of array (destructive)

nums.pop() // removes element from end of array (destructive)

nums.shift() // removes element from beginning of array (destructive)

const slicedNums = nums.slice(1, 5) // creates subarray of array (non-destructive)

nums.splice(1, 1, "add an element") // replaces index/indices with element (destructive)

nums.splice(1, 0, "replace an element") // replaces index with element (destructive)

nums[3] = "replace an element" // replaces index with element (destructive)

// spread operator

let strings = ['a', 'b', 'c', 'd']

const zStrings = ['z', ...strings] // adds element to beginning of array (non-destructive)

const zStringse = [...zStrings, 'e'] // adds element to end of array (non-destructive)