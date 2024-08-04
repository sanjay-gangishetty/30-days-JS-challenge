// Activity 1: Median of Two Sorted Arrays
// Task 1: Solve the "Median of Two Sorted Arrays" problem on LeetCode.

// - Write a function that takes two sorted arrays of integers and returns the median of the two sorted arrays.
// - Log the median for a few test cases, including edge cases.
function findMedianSortedArrays(nums1, nums2) {
  if (nums1.length > nums2.length) {
    [nums1, nums2] = [nums2, nums1];
  }

  let x = nums1.length;
  let y = nums2.length;
  let low = 0,
    high = x;

  while (low <= high) {
    let partitionX = Math.floor((low + high) / 2);
    let partitionY = Math.floor((x + y + 1) / 2) - partitionX;

    let maxX = partitionX === 0 ? -Infinity : nums1[partitionX - 1];
    let minX = partitionX === x ? Infinity : nums1[partitionX];

    let maxY = partitionY === 0 ? -Infinity : nums2[partitionY - 1];
    let minY = partitionY === y ? Infinity : nums2[partitionY];

    if (maxX <= minY && maxY <= minX) {
      if ((x + y) % 2 === 0) {
        return (Math.max(maxX, maxY) + Math.min(minX, minY)) / 2;
      } else {
        return Math.max(maxX, maxY);
      }
    } else if (maxX > minY) {
      high = partitionX - 1;
    } else {
      low = partitionX + 1;
    }
  }

  throw new Error("Input arrays are not sorted");
}

// Test cases
console.log(findMedianSortedArrays([1, 3], [2])); // Output: 2.0
console.log(findMedianSortedArrays([1, 2], [3, 4])); // Output: 2.5
console.log(findMedianSortedArrays([0, 0], [0, 0])); // Output: 0.0
console.log(findMedianSortedArrays([], [1])); // Output: 1.0
console.log(findMedianSortedArrays([2], [])); // Output: 2.0
