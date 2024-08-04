// Activity 2 - Reverse Integer
// Task 2 - Solve the reverse integer problem on leetcode.
// - write a function that takes an integer and returns its digits reversed.
// - Handle edge cases like negative numbers and numbers ending in zero.
// - Log reversed integer for a few test cases.

function reverseInteger(num) {
  let isNegative = num < 0;
  num = Math.abs(num);
  let rev = 0;
  while (num != 0) {
    let digit = num % 10;
    rev = rev * 10 + digit;
    num = Math.floor(num / 10);
  }
  if (isNegative) {
    rev = -rev;
  }
  // Handle 32-bit integer overflow
  if (rev < Math.pow(-2, 31) || rev > Math.pow(2, 31) - 1) {
    return 0;
  }
  return rev;
}

// Test cases
console.log(reverseInteger(381));  // Output: 183
console.log(reverseInteger(-123)); // Output: -321
console.log(reverseInteger(1200)); // Output: 21
console.log(reverseInteger(0));    // Output: 0
