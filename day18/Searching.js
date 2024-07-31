// Activity 2 - Searching Algorithms
const arr = [9, 6, 5, 4, 3, 1];
console.log(linearSearch(arr, 3));
console.log(binarySearch(sortedArr, 6));


// Task 4 - Linear search to find target in the arr
function linearSearch(arr, target) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] == target) {
      return `Index of ${arr[i]} is ${i}`;
    }
  }
  return -1;
}

// Task 5 - Binary search in a sorted arr
function binarySearch(arr, target) {
  let start = 0;
  let end = arr.length - 1;
  while (start < end) {
    mid = Math.floor((start + end) / 2);
    if (arr[mid] == target) {
      return mid;
    } else if (arr[mid] < target) {
      start = mid + 1;
    } else {
      end = mid - 1;
    }
  }
  return -1;
}
