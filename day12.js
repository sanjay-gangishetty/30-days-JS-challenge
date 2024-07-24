// Activity 1 - Basic error handling and try-catch
console.log("/****************** - Activity 1 - ***********************/");
// Task 1: Write a function that intentionally throws an error and use a try-catch block to handle the error and log an appropriate message to the console.
function errorThrower() {
  throw new Error("Throwing from error thrower function");
}

try {
  errorThrower();
} catch (e) {
  console.log(e.message);
  console.log("There's an error in errorThrower function");
}

// Task 2: Create a function that divides two numbers and throws an error if the denominator is zero. Use a try-catch block to handle this error.
function divide(a, b) {
  if (b == 0) throw new Error("Denominator must not be zero");
  return a / b;
}
try {
  console.log(divide(10, 0));
} catch (e) {
  console.log(e.message);
}
console.log('\n');

// Activity 2 - Finally Block
console.log("/****************** - Activity 2 - ***********************/");
// Task 3: Write a script that includes a try-catch block and a finally block. Log messages in the try, catch, and finally blocks to observe the execution flow.
try {
  // console.log(divide(10,0));
  console.log("try block!!");
} catch (e) {
  console.log("catch block!!");
  console.log(e.message);
} finally {
  console.log("finally block!!");
}
console.log('\n');

// Activity 3 - Custom Error Objects
console.log("/****************** - Activity 3 - ***********************/");
// Task 4: Create a custom error class that extends the built-in Error class. Throw an instance of this custom error in a function and handle it using a try-catch block.
class CustomErr extends Error {
  constructor(message) {
    super(message);
    this.name = this.constructor.name; // Sets the error name to the class name
  }
}

function custErr() {
  try {
    throw new CustomErr("Throwing custom err....");
  } catch (e) {
    console.log(e.message);
  }
}

custErr();

// Task 5: Write a function that validates user input (e.g., checking if a string is not empty) and throws a custom error if the validation fails. Handle the custom error using a try-catch block.
function validateUserInput(input) {
  try {
    if (input == "") {
      throw new CustomErr("String cannot be empty!!");
    }
  } catch (e) {
    console.log(e.message);
  }
}

validateUserInput("");
console.log('\n');

// Activity 4 - Error Handling in Promises
// Task 6: Create a promise that randomly resolves or rejects. Use .catch() to handle the rejection and log an appropriate message to the console.
console.log("/****************** - Activity 4 - ***********************/");
const prom = new Promise((resolve,reject) => {
  const randomValue = Math.random();
  if (randomValue > 0.5) {
      resolve('The promise was resolved!');
  } else {
      reject('The promise was rejected!');
  }
});
prom.then(
  (msg) => console.log(msg),
).catch(
  (msg) => console.log(msg),
);

// Task 7: Use try-catch within an async function to handle errors from a promise that randomly resolves or rejects, and log the error message.
const randProm = async () => {
  return new Promise((resolve, reject) => {
      const randomValue = Math.random();
      if (randomValue > 0.5) {
          resolve('The promise was resolved!');
      } else {
          reject('The promise was rejected!');
      }
  });
};

const handleProm = async () => {
  try {
      const message = await randProm();
      console.log(message);
  } catch (err) {
      console.log(err);
  }
};

handleProm();
console.log('\n');

// Activity 5 - Graceful Error Handling in fetch
// Task 8: Use the fetch API to request data from an invalid URL and handle the error using .catch(). Log an appropriate error message to the console.
console.log("/****************** - Activity 5 - ***********************/");
try {
  const response = fetch(
    "https://newsap.org/v2/everything?q=tesla&from=2024-06-23&sortBy=publishedAt&apiKey=6121fe41980d4f2a95f6baf7534a36",
  );
  var res = response.json();
} catch (e) {
  console.log(e.message);
}

// Task 9: Use the fetch API to request data from an invalid URL within an async function and handle the error using try-catch. Log an appropriate error message.
const fetcher = async () => {
  try {
    var result = await fetch(
      "https://newsap.org/v2/everything?q=tesla&from=2024-06-23&sortBy=publishedAt&apiKey=6121fe41980d4f2a95f6baf7534a36",
    );
    var resultJson = await result.json();
    console.log(resultJson);
  } catch (e) {
    console.log(e.message);
  }
};
fetcher();
console.log('\n');

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Feature Request:
// 1. Basic Error Handling Script: Write a script that demonstrates basic error handling using try-catch and finally blocks.
// 2. Custom Error Script: Create a script that defines and throws custom errors, handling them with try-catch blocks.
// 3. Promise Error Handling Script: Write a script that handles errors in promises using .catch() and try-catch within async functions.
// 4. Fetch Error Handling Script: Create a script that handles errors when using the fetch API to request data from invalid URLs.

// Achievement:
// By the end of these activities, students will:
// • Understand and implement basic error handling using try-catch blocks.
// • Use finally blocks to execute code regardless of the try-catch outcome.
// • Create and use custom error classes.
// • Handle errors in promises using .catch() and within async functions using try-catch. Implement graceful error handling when making network requests with the fetch API.
