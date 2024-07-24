// Activity 1 - Basic error handling and try-catch
console.log("/****************** - Activity 1 - ***********************/");
function errorThrower() {
  throw new Error("Throwing from error thrower function");
}

try {
  errorThrower();
} catch (e) {
  console.log(e.message);
  console.log("There's an error in errorThrower function");
}

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
console.log("/****************** - Activity 5 - ***********************/");
try {
  const response = fetch(
    "https://newsap.org/v2/everything?q=tesla&from=2024-06-23&sortBy=publishedAt&apiKey=6121fe41980d4f2a95f6baf7534a36",
  );
  var res = response.json();
} catch (e) {
  console.log(e.message);
}

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
