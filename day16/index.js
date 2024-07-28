// Activity 1 - Basic Recursion
console.log("/****************** - Activity 1 - ***********************/");
// Task 1: Write a recursive function to calculate the factorial of a number. Log the result for a few test cases.
function factorial(n) {
  var res = 1;
  if (n == 1) return (res *= n);
  res = factorial(n - 1);
  res *= n;
  return res;
}
console.log("Factorial of 5 : " + factorial(5));
console.log("Factorial of 3 : " + factorial(3));
console.log("Factorial of 10 : " + factorial(10));

// Task 2: Write a recursive function to calculate the nth Fibonacci number. Log the result for a few test cases.
function fib(n) {
  if (n == 0) return 0;
  if (n == 1) return 1;
  var fib1 = fib(n - 1);
  var fib2 = fib(n - 2);
  var res = fib1 + fib2;
  return res;
}
console.log("Fibonacci of 5 : " + fib(5));
console.log("Fibonacci of 10 : " + fib(10));
console.log("Fibonacci of 11 : " + fib(11));
console.log("\n");

// Activity 2 - Recursion with arrays
console.log("/****************** - Activity 2 - ***********************/");
// Task 3: Write a recursive function to find the sum of all elements in an array. Log the result for a few test cases.
function sumOfArray(arr, n) {
  var sum = 0;
  if (n == 0) return (sum += arr[n]);
  sum = sumOfArray(arr, n - 1);
  sum += arr[n];
  return sum;
}
let arr = [10, 20, 30, 40];
let arr2 = [100, 200, 300, 400];
console.log("Sum of array [10,20,30,40] : " + sumOfArray(arr, arr.length - 1));
console.log(
  "Sum of array [100,200,300,400] : " + sumOfArray(arr2, arr2.length - 1),
);
console.log("\n");

// Task 4: Write a recursive function to find the maximum element in an array. Log the result for a few test cases.
function findMax(arr, n) {
  if (n == 0) return arr[n];
  let result = findMax(arr, n - 1);
  return Math.max(arr[n], result);
}
console.log(
  "Max element in arr 1 [10,20,30,40] : " + findMax(arr, arr.length - 1),
);
console.log(
  "Max element in arr 2 [100,200,300,400] : " + findMax(arr2, arr2.length - 1),
);
console.log("\n");

// Activity 3 - String manipulation with recursion
console.log("/****************** - Activity 3 - ***********************/");
// Task 5: Write a recursive function to reverse a string. Log the result for a few test cases.
var str = "Hello";
var str2 = "Sanjay";
var splitStr = str.split("");
var splitStr2 = str2.split("");
function revString(str, n) {
  if (n == 0) return str[n];
  return str[n] + revString(str, n - 1);
}
console.log(`Reversal of ${str} : ` + revString(splitStr, splitStr.length - 1));
console.log(
  `Reversal of ${str2} : ` + revString(splitStr2, splitStr2.length - 1),
);

// Task 6: Write a recursive function to check if a string is a palindrome. Log the result for a few test cases.
function checkPalindrome(str) {
  if (str.length <= 1) return true;
  if (str[0] !== str[str.length - 1]) return false;
  return checkPalindrome(str.slice(1, str.length - 1));
}
var str1 = "Hello";
console.log(`Is ${str1} palindrome ? ` + checkPalindrome(str1));
var str2 = "madam";
console.log(`Is ${str2} palindrome ? ` + checkPalindrome(str2));
console.log("\n");

// Activity 4 - Recursive search
console.log("/****************** - Activity 4 - ***********************/");
// Task 7: Write a recursive function to perform a binary search on a sorted array. Log the index of the target element for a few test cases.
function binarySearch(arr, target, low, high) {
  if (low > high) return -1;
  let mid = Math.floor((low + high) / 2);
  if (arr[mid] === target) return mid;
  if (arr[mid] > target) {
    return binarySearch(arr, target, low, mid - 1);
  } else {
    return binarySearch(arr, target, mid + 1, high);
  }
}
let sortedArray = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let target = 5;
let result = binarySearch(sortedArray, target, 0, sortedArray.length - 1);
if (result !== -1) {
  console.log(`Element found at index: ${result}`);
} else {
  console.log("Element not found");
}

// Task 8: Write a recursive function to count the occurrences of a target element in an array. Log the result for a few test cases.
function countOccurrences(arr, target, index = 0) {
  if (index === arr.length) return 0;
  let count = arr[index] === target ? 1 : 0;
  return count + countOccurrences(arr, target, index + 1);
}

let array = [1, 2, 3, 4, 2, 2, 5, 2];
let targetele = 2;
let resultele = countOccurrences(array, targetele);
console.log(`Element ${targetele} occurs ${result} times in the array.`);
console.log("\n");

// Activity 5 - Tree traversal
console.log("/****************** - Activity 5 - ***********************/");
// Task 9: Write a recursive function to perform an in-order traversal of a binary tree. Log the nodes as they are visited.
// Definition of a binary tree node
function TreeNode(val, left = null, right = null) {
  this.val = val;
  this.left = left;
  this.right = right;
}

// Recursive function to perform inorder traversal
function inorderTraversal(root, result = []) {
  if (root === null) return result; // Base case: if the node is null, return the result array
  // Traverse the left subtree
  inorderTraversal(root.left, result);
  // Visit the current node
  result.push(root.val);
  // Traverse the right subtree
  inorderTraversal(root.right, result);
  return result;
}
// Example usage:
let root = new TreeNode(1);
root.right = new TreeNode(2);
root.right.left = new TreeNode(3);
let results = inorderTraversal(root);
console.log(results); // Output: [1, 3, 2]

// Task 10: Write a recursive function to calculate the depth of a binary tree. Log the result for a few test cases.
// Recursive function to calculate the depth of a binary tree
function maxDepth(root) {
  if (root === null) return 0; // Base case: if the node is null, return 0

  // Recursively calculate the depth of the left and right subtrees
  let leftDepth = maxDepth(root.left);
  let rightDepth = maxDepth(root.right);

  // Return the greater depth plus one for the current node
  return Math.max(leftDepth, rightDepth) + 1;
}

// Example usage:
let root2 = new TreeNode(1);
root2.left = new TreeNode(2);
root2.right = new TreeNode(3);
root2.left.left = new TreeNode(4);
root2.left.right = new TreeNode(5);

let depth = maxDepth(root2);
console.log(`Depth of the binary tree: ${depth}`); // Output: Depth of the binary tree: 3
console.log("\n");
