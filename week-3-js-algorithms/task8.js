// 8 - Equality Check. Create a function that returns true or false that matches the examples below


// Your code here
function checkEquality(a, b) {
  return (a === b) && (a == b) ? 
  `"true" A ${typeof a} and a ${typeof b}: the type and value are equal` : 
  `"false" A ${typeof a} and a ${typeof b}: the value and/or type are different`;
}

console.log(checkEquality(1, true)) ; // ➞ false. A number and a boolean: the value and type are different
console.log(checkEquality(0, "0")); // ➞ false. A number and a string: the type is different
console.log(checkEquality(1, 1)); // ➞ true. A number and a number: the type and value are equal
console.log(checkEquality(1, 2)); // "false" A number and a number: the value and/or type are different