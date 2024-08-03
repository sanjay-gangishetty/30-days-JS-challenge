// Activity 1 - Two Sum Problem
// Task 1 - Write an function that takes an array of numbers and a target number and returns the indices of the two numbers that add upto the target.
/*
Example 1:
Input: nums = [2,7,11,15], target = 9
Output: [0,1]
Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].

Example 2:
Input: nums = [3,2,4], target = 6
Output: [1,2]

Example 3:
Input: nums = [3,3], target = 6
Output: [0,1]
*/
const arr = [1, 4, 6, 7, 3, 9];
console.log(twoSum(arr, 6));
function twoSum(arr, target) { // TC = O(n^2)
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] + arr[j] == target) {
        return [i, j];
      }
    }
  }
  return -1;
}
