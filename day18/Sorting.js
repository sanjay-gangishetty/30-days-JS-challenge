// Activity 1 - Sorting Algorithms
const arr = [9, 6, 5, 4, 3, 1];
console.log("Before sorting");
console.log(arr);
bubbleSort(arr);
selectionSort(arr);
quickSort(arr);
const sortedArr = quickSort(arr);
console.log("Sorted array:", sortedArr);

// Task 1 - Bubble sort in ascending order
function bubbleSort(arr) {
  // TC = O(n^2)
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      if (arr[i] < arr[j]) {
        var temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
      }
      console.log(arr);
    }
  }
}

// Task 2 - Selection sort in ascending order
function selectionSort() {
  // TC = O(n^2)
  for (let i = 0; i < arr.length - 1; i++) {
    var selectedIndex = i;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[selectedIndex]) {
        selectedIndex = j;
      }
    }
    var temp = arr[i];
    arr[i] = arr[selectedIndex];
    arr[selectedIndex] = temp;
  }
}

// Task 3 - Quick sort in ascending order
function quickSort(arr) {
  // Base case: arrays with fewer than 2 elements are already sorted
  if (arr.length < 2) {
    return arr;
  }

  // Select the pivot element, typically the last element in the array
  const pivot = arr[arr.length - 1];
  const left = [];
  const right = [];
  // Partition the array into two subarrays: left and right
  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] < pivot) {
      left.push(arr[i]);
    } else {
      right.push(arr[i]);
    }
  }
  // Recursively sort the left and right subarrays and concatenate with pivot
  return [...quickSort(left), pivot, ...quickSort(right)];
}
