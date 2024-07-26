// Activity 1 - Creating and exporting modules
// Task 1: Create a module that exports a function to add two numbers. Import and use this module in another script.
const { add } = require("./add.js");
console.log(add(1, 2));

// Task 2: Create a module that exports an object representing a person with properties and methods. Import and use this module in another script.
const { person } = require("./person.js");
console.log(person.isEligible);
