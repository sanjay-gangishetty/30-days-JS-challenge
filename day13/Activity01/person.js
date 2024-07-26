// Task 2: Create a module that exports an object representing a person with properties and methods. Import and use this module in another script.
const person = {
  name: "Raj",
  age: 23,
  isEligible: (this.age > 18 ? "Eligible to vote" : "Not eligible to vote"),
}

module.exports = {person};
