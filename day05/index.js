// Activity 1 - Function Declaration
// Task 1 - check if num is even or odd and log result
function evenOrOdd(num) {
    var result = num % 2 == 0 ? "Even" : "Odd";
    console.log(result);
  }
  evenOrOdd(11);
  // Task 2 - calculate square of a number and return the result
  function square(num) {
    var result = num * num;
    return result;
  }
  square(6);
  
  // Activity 2 - Function Expression
  // Task 3 - find max of 2 nums and log the result
  var max = function (a, b) {
    if (a >= b) {
      console.log("A is greater than B");
    } else {
      console.log("B is greater than A");
    }
  };
  max(1, 2);
  
  // Task 4 - concatenate 2 strings and return result
  var concat = function (str1, str2) {
    return str1 + str2;
  };
  console.log(concat("s", "a"));
  
  // Activity 3 - Arrow Functions
  // Task 5 - calculate sum of 2 nums and return result
  var res = (a, b) => {
    return a + b;
  };
  console.log(res(5, 6));
  
  // Task 6 - check if a string contains a specific character and return boolean value
  var checkExists = (str, ch) => {
    return str.includes(ch);
  };
  console.log(checkExists("sanjay", "s"));
  
  // Activity 4 - Function parameters and default values
  // Task 7 - function takes 2 parameters and return product, provide default value to second parameter.
  function product(a, b = 1) {
    return a * b;
  }
  console.log("Product : " + product(2));
  
  // Task 8 - function takes person's name and age and returns a greeting message, provide defalut value for age
  function greet(name, age = 16) {
    return `Hello ${name}, your age is ${age}`;
  }
  console.log(greet("Batman", "22"));
  
  // Activity 5 - Higher order Functions
  // Note - higherOrderFunction: Takes a callback function, executes it, and performs operations.
  // Task 9 - higher-order that takes function and a number and calls the function that many times.
  function callBackFunc() {
    console.log("Callback is being called!!");
  }
  function higherOrderFunction(num, callBack) {
    for (let i = 1; i <= num; i++) {
      callBack();
    }
  }
  higherOrderFunction(5, callBackFunc);
  
  // Task 10 - higher-order that takes two functions and a value, applies first function to the value and then applies second  function to the result.
  
  function higherOrderFunc(square, product, val) {
    val = square(val);
    result = product(val, val);
    return val + result;
  }
  
  console.log(higherOrderFunc(square, product, 5));
