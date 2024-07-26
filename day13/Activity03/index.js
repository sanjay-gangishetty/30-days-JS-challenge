// Activity 3 - Importing Entire Modules
// Task 5: Create a module that exports multiple constants and functions. Import the entire module as an object in another script and use its properties.
import * as ent from "./entireModule.js";
console.log(ent.name);
console.log(ent.age);
console.log(ent.greet());
