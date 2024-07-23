// Activity 1 - Array creation and access
// Task 1 - create an array of nums from 1 to 5 and log the array to the console
var arr = [1, 2, 3, 4, 5];
console.log(arr);

// Task 2 - Access the first and last elements of the array and log them to the console
console.log("First Element : " + arr[0]);
console.log("Last Element : " + arr[arr.length - 1]);

// Activity 2 - Array methods basic
// Task 3 - use push method to add new number to the end of the array and log the updated array
arr.push(6);
console.log(arr);

// Task 4 - use pop method to remove the last element from the array and log the updated array
arr.pop();
console.log(arr);

/* 
Note - 
The shift() method removes the first item of an array and returns the removed element.
The unshift() method adds new elements to the beginning of an array.
*/

// Task 5 - use shift method to remove the first element from the array and log the updated array
var val = arr.shift();
console.log(val);
console.log(arr);

// Task 6 - use unshift to add and log the updated array
arr.unshift(1);
console.log(arr);

// Activity 3 - Array Methods (Intermediate)
// Task 7 - use the map method to create a new array where each number is doubled and log the new array
var arr2 = [];
arr.map((num) => {
  arr2.push(num * num);
});
console.log(arr2);

// Task 8 - use the filter method to create a new array with only even numbers and log the new array
var arr3 = arr2.filter((num) => num % 2 == 0);
console.log(arr3);

// Task 9 - use reduce method to calculate the sum of all numbers in the array and log the result
var initialValue = 0;
var result = arr.reduce((accumulator, currentValue) => {
  return accumulator + currentValue;
}, initialValue);
console.log(result);

// Activity 4 - Array Iteration
// Task 10 - Use for loop to iterate over the array and log each element to the console
console.log("/*****************************************/");
for (let i = 0; i < arr.length; i++) {
  console.log(arr[i]);
}
console.log("/*****************************************/");

// Task 11 - Use forEach loop to iterate over the array and log each element to the console
arr.forEach((element) => console.log(element));
console.log("/*****************************************/");

// Activity 5 - Multi-dimentional arrays
// Task 12 - create a two dimentional(matrix) array and log the entire array to the console
var multiDimentionalArray = [arr, arr2];
console.log(multiDimentionalArray);

// Task 13 - Access and log a specific from the two dimentional array
console.log(multiDimentionalArray[1][1]); // Output: 4
