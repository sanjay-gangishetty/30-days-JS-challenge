// Activity 5 - Valid Parentheses 
// Task 5 - Solve the valid parentheses problem on LeetCode
// - Write a function that takes a string containing just the characters '(', ')','{','}','[' and ']', and determines if the input string is valid.
// - A string is valid if open brackets are closed in the correct order.
// - Log the for a few test cases.

class Stack {
  constructor() {
    this.items = [];
  }

  // Add an element to the top of the stack
  push(element) {
    this.items.push(element);
  }

  // Remove and return the top element of the stack
  pop() {
    if (this.isEmpty()) {
      return "Underflow";
    }
    return this.items.pop();
  }

  // View the top element of the stack without removing it
  peek() {
    if (this.isEmpty()) {
      return "No elements in Stack";
    }
    return this.items[this.items.length - 1];
  }

  // Check if the stack is empty
  isEmpty() {
    return this.items.length === 0;
  }

  // Get the size of the stack
  size() {
    return this.items.length;
  }

  // Clear the stack
  clear() {
    this.items = [];
  }

  // Print the stack
  print() {
    console.log(this.items.toString());
  }
}

function isValidParentheses(str) {
  const stack = new Stack();
  const map = {
    '(': ')',
    '[': ']',
    '{': '}'
  };
  for (let char of str) {
    if (char in map) {
      stack.push(char);
    } else {
      if (stack.isEmpty() || map[stack.pop()] !== char) {
        return false;
      }
    }
  }
  return stack.isEmpty();
}

// Test cases
console.log(isValidParentheses("{([])}"));  // Output: true
console.log(isValidParentheses("{([)]}"));  // Output: false
console.log(isValidParentheses("{[()]}"));  // Output: true
console.log(isValidParentheses(""));        // Output: true
console.log(isValidParentheses("{"));       // Output: false
console.log(isValidParentheses("}"));       // Output: false
