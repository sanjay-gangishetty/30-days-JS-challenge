// Activity 4 - Array Algorithms

// Task 8 - Function to rotate an array by k positions and log the array
function rotateArray(arr, k) {
  const n = arr.length;
  k = k % n;
  const rotatedArr = arr.slice(-k).concat(arr.slice(0, n - k));

  console.log(rotatedArr);
  return rotatedArr;
}

const arr = [1, 2, 3, 4, 5, 6, 7];
const k = 3;
rotateArray(arr, k); // Output: [5, 6, 7, 1, 2, 3, 4]

// Task 9 - Function to merge two sorted arrays into one sorted array and log the array
function mergeSortedArrays(arr1, arr2) {
  const mergedArray = [];
  let i = 0,
    j = 0;
  while (i < arr1.length && j < arr2.length) {
    if (arr1[i] < arr2[j]) {
      mergedArray.push(arr1[i]);
      i++;
    } else {
      mergedArray.push(arr2[j]);
      j++;
    }
  }
  while (i < arr1.length) {
    mergedArray.push(arr1[i]);
    i++;
  }
  while (j < arr2.length) {
    mergedArray.push(arr2[j]);
    j++;
  }

  console.log(mergedArray);
  return mergedArray;
}

const arr1 = [1, 3, 5, 7];
const arr2 = [2, 4, 6, 8];
mergeSortedArrays(arr1, arr2); // Output: [1, 2, 3, 4, 5, 6, 7, 8]
