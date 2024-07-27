// Note - Closure - A closure is a function having access to the parent scope, even after the parent function has closed.
// Activity 1 - Understanding closures
console.log("/****************** - Activity 1 - ***********************/");
// Task 1: Write a function that returns another function, where the inner function accesses a variable from the outer function's scope. Call the inner function and log the result.
function outer() {
  var a = 10;
  function inner() {
    return a;
  }
  return inner;
}
const innerFunc = outer();
console.log(innerFunc());

// Task 2: Create a closure that maintains a private counter. Implement functions to increment and get the current value of the counter.
function counter() {
  let count = 0;
  function increment(val) {
    count += val;
    return "count is " + count;
  }
  function getCount() {
    return count;
  }
  return { increment, getCount };
}
const { increment, getCount } = counter();
console.log(increment(10));
console.log(getCount());
console.log("\n");

// Activity 2 - Practical closures
console.log("/****************** - Activity 2 - ***********************/");
// Task 3: Write a function that generates unique IDs. Use a closure to keep track of the last generated ID and increment it with each call.
function generateId() {
  let id = 0;
  id = Math.floor(Math.random() * 10000);
  function incrementId() {
    console.log("Before updating value of ID is : " + id);
    id++;
    console.log("After updating value of ID is : " + id);
  }
  return incrementId;
}
const idIncrementor = generateId();
idIncrementor();

// Task 4: Create a closure that captures a user's name and returns a function that greets the user by name.
function greeter(name) {
  return () => {
    return `Hello, ${name}`;
  };
}
const greet = greeter("Sanjay");
console.log(greet());
console.log("\n");

// Activity 3 - Closures in loops
console.log("/****************** - Activity 3 - ***********************/");
// Task 5 : Write a loop that creates an array of functions. Each function should log its index when called. Use a closure to ensure each function logs the correct index.
function createFunctionArray(size) {
  const functionArray = [];

  for (let i = 0; i < size; i++) {
    functionArray.push(
      (function (index) {
        return function () {
          console.log(index);
        };
      })(i),
    );
  }

  return functionArray;
}

const funcArray = createFunctionArray(5);
funcArray[0]();
funcArray[1]();
console.log("\n");

// Note -  Module Pattern - 
// The module pattern is a design pattern used for improving the maintainability and reusability of the code by creating public and private access levels. 
// Sometimes called encapsulation, it protects the value inside a module from being accessed from other scopes.
// Activity 4 - Module Pattern
console.log("/****************** - Activity 4 - ***********************/");
// Task 6: Use closures to create a simple module for managing a collection of items. Implement methods to add, remove, and list items.
function collectionManager() {
  let items = [];
  function addItem(item) {
    items.push(item);
    console.log("Added item : " + item);
  }
  function removeItem() {
    if (items.length == 0) {
      console.log("List is empty!!");
      return;
    }
    var poppedItem = items.pop();
    console.log("Removed item : " + poppedItem);
  }

  function listItems() {
    console.log("-------------List of items-------------");
    items.forEach((item) => console.log(item));
  }

  return { addItem, removeItem, listItems };
}

const { addItem, removeItem, listItems } = collectionManager();
removeItem();
addItem("spice");
addItem("spice2");
addItem("spice3");
addItem("spice4");
removeItem();
listItems();
console.log("\n");

// Note - Memorization - Memoisation saves the function results before returning them to the function caller when a function is invoked. 
// Activity 5 - Memorization
console.log("/****************** - Activity 5 - ***********************/");
// Task 7: Write a function that memoizes the results of another function. Use a closure to store the results of previous computations.
function memorizer() {
  const cache = {};

  function add(a, b) {
    const key = `${a},${b}`;
    if (key in cache) {
      console.log(`Fetching from cache for args: ${a}, ${b}`);
      return cache[key];
    } else {
      let result = a + b;
      cache[key] = result;
      console.log(result);
      return result;
    }
  }
  function viewPrevComputations() {
    Object.entries(cache).forEach(([key, value]) =>
      console.log(`Args: ${key} -> Value: ${value}`),
    );
    return;
  }
  return { add, viewPrevComputations };
}
const { add, viewPrevComputations } = memorizer();
add(10, 20);
add(20, 30);
add(30, 40);
add(10, 20);
viewPrevComputations();

// Task 8: Create a memoized version of a function that calculates the factorial of a number.
function factorialMemorizer() {
  const cache = {};

  function fact(n) {
    if (n < 0) {
      throw new Error("Negative number!!");
    }
    if (n === 0 || n === 1) {
      return 1;
    }
    if (cache[n] !== undefined) {
      console.log(`Fetching from cache for ${n}`);
      return cache[n];
    }
    let result = n * fact(n - 1);
    cache[n] = result;
    console.log(`Factorial of ${n} is ${result}`);
    return result;
  }
  function viewPrevComputations2() {
    Object.entries(cache).forEach(([key, value]) =>
      console.log(`Factorial of ${key} is ${value}`),
    );
  }
  return { fact, viewPrevComputations2 };
}

const { fact, viewPrevComputations2 } = factorialMemorizer();
fact(5);
fact(2);
fact(3);
fact(5);
viewPrevComputations();
