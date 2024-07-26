// Activity 2 - Named and Default exports
// Task 3: Create a module that exports multiple functions using named exports. Import and use these functions in another script.
import { add2, subtract, multiply, divide, modulo } from "./calcluate.js";
console.log(add2(1, 2));
console.log(subtract(1, 2));
console.log(multiply(1, 2));
console.log(divide(1, 2));
console.log(modulo(1, 2));

// Task 4: Create a module that exports a single function using default export. Import and use this function in another script.
import defaultFunc from "./calcluate.js";
console.log(defaultFunc());
