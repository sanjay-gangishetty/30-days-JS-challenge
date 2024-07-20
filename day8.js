// Activity 1 - Template Literals
console.log("/****************** - Activity 1 - ***********************/");
// Task 1 - use template literals and create a string that includes variables person name and age and log.
var name = "Sanjay";
var age = 23;
console.log(`Hello ${name}, your age is ${age}`);

// Task 2 - create a multiline string using template literals and log.
console.log(
  `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`,
);
console.log();
console.log();

// Activity 2 - Destructuring
console.log("/****************** - Activity 2 - ***********************/");
// Task 3 - Use array destructuring to extract 1st and 2nd elements from the array and log.
var arr = [1, 2, 3, 4, 5, 6];
var [eleOne, eleTwo, , , , elelast] = arr;
console.log("First element : "+eleOne + " Second element : " + eleTwo);

// Task 4 - Use object destructuring to extract title and author from the book object and log.
var book = {
  title: "4 Hour work week.",
  author: "Tim Ferris",
  year: 2012,
};
var { title, author } = book;
console.log("Title : " + title + "\nAuthor : " + author);
console.log();
console.log();

// Activity 3 - Spread and rest operator
console.log("/****************** - Activity 3 - ***********************/");
// Task 5 - use spread operator to create a new array that includes all the elements of an existing array plus additional elements and log.
var newArr = [...arr, 7, 8, 9, 10];
console.log(newArr);

// Task 6 - use the rest operator in a function to accept an arbitrary number of arguments and sum them and log.
function sum(...numbers) {
  var sum = 0;
  numbers.forEach((num) => (sum += num));
  return sum;
}
console.log(sum(1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11));
console.log();
console.log();

// Activity 4 - Default parameters
// Task 7 - Write a function that takes 2 parameters and returns their product. With second parameter having a default value of 1. Log the result of calling this function with and without second parameter.
console.log("/****************** - Activity 4 - ***********************/");
function product(p1, p2 = 1) {
  return p1 * p2;
}
console.log("With second parameter : " + product(2, 5));
console.log("Without second parameter : " + product(2));
console.log();
console.log();

// Activity 5 - Enhanced object literals
console.log("/****************** - Activity 5 - ***********************/");
// Task 8 - Use enhanced object literals to create an object with methods and properties and log the object.
var enhancedObj = {
  name,
  age,
  arr,
  sum,
  product,
};
console.log(enhancedObj);

// Task 9 - Create an object with computed property names based on variables and log the object.
var key1 = "name";
var key2 = "age";

var computedPropertyNames = {
  [key1]: "Sai",
  [key2]: 22,
}
console.log(computedPropertyNames);
console.log();
console.log();
