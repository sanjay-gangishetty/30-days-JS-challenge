// Activity 2 - Palindrome Number
// Task 3 - Solve the "Palindrome Number" problem on leetcode.
// - Write a function that takes an integer and returns true if it a palindrome, and false otherwise.

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

function isPalindrome(num){
  let revNum = reverseInteger(num);
  if(num == revNum){
    return true;
  }
  return false;
}

console.log(isPalindrome(123)); //false
console.log(isPalindrome(121)); //true
