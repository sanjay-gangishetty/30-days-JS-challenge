// Activity 4: 3Sum
// Task 4: Solve the "3Sum" problem on LeetCode.

// - Write a function that takes an array of integers and finds all unique triplets in the array which give the sum of zero.
// - Log the triplets for a few test cases, including edge cases.

function threeSum(nums) {
  const result = [];
  nums.sort((a, b) => a - b); // Sort the array

  for (let i = 0; i < nums.length - 2; i++) {
    if (i > 0 && nums[i] === nums[i - 1]) {
      // Skip duplicate elements
      continue;
    }
    let left = i + 1;
    let right = nums.length - 1;
    while (left < right) {
      const sum = nums[i] + nums[left] + nums[right];
      if (sum === 0) {
        result.push([nums[i], nums[left], nums[right]]);
        while (left < right && nums[left] === nums[left + 1]) {
          left++; // Skip duplicate elements
        }
        while (left < right && nums[right] === nums[right - 1]) {
          right--; // Skip duplicate elements
        }
        left++;
        right--;
      } else if (sum < 0) {
        left++;
      } else {
        right--;
      }
    }
  }

  return result;
}

// Test cases
console.log(threeSum([-1, 0, 1, 2, -1, -4])); // Output: [[-1, -1, 2], [-1, 0, 1]]
console.log(threeSum([0, 0, 0, 0])); // Output: [[0, 0, 0]]
console.log(threeSum([1, 2, -2, -1])); // Output: []
console.log(threeSum([3, -2, 1, 0, -1])); // Output: [[-2, -1, 3], [-1, 0, 1]]
console.log(threeSum([])); // Output: []
