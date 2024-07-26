// Activity 1 - Arithmetic Operations
const num1 = 10;
const num2 = 20;
// Task 1 : Pgm to add 2 nums
const add = num1+num2;
// Task 2 : Pgm to subtract 2 nums
const sub = num1-num2;
// Task 3 : Pgm to multiply 2 nums
const mul = num1*num2;
// Task 4 : Pgm to divide 2 nums
const div = num1/num2;
// Task 5 : Pgm to find the remainder of 2 nums
const rem = num1%num2;
console.log("Addition of "+num1+" and "+num2+" "+add); 
console.log("Subtraction of "+num1+" and "+num2+" "+sub);
console.log("Multiplication of "+num1+" and "+num2+" "+mul);
console.log("Division of "+num1+" and "+num2+" "+div);
console.log("Remainder of "+num1+" and "+num2+" "+rem);

// Activity 2 - Assignment Operators
let a = 10;
let b = 20;
// Task 6: use the += operator to add a number to variable and log the result
a+=5;
console.log("Addition of 5 to a: "+a);
// Task 7: use the -= operator to subtract a number from a variable and log the result
b-=5;
console.log("Subtraction of 5 from b: "+b);

// Activity 3 - Comparison Operators
const x = 10;
const y = 20;
// Task 8: use the < and > operators to compare two numbers and log the result
console.log("Is x is less than y: "+(x<y));
console.log("Is x is greater than y: "+(x>y));
// Task 9: use the >= and <= operators to compare two numbers and log the result
console.log("Is x is less than or equal to y: "+(x<=y));
console.log("Is x is greater than or equal to y: "+(x>=y));
// Task 10: use the == and === operators to compare two numbers and log the result
console.log("Is x is equal to y: "+(x==y));
console.log("Is x is strictly equal to y: "+(x===y));

// Activity 4 - Logical Operators
// Task 11: Pgm uses && operator to combine two conditions and log the result
console.log(x<=20 && y<=20);
// Task 12: Pgm uses || operator to combine two conditions and log the result
console.log(x<=20 || y<=20);
// Task 13: Pgm uses ! operator to combine two conditions and log the result
console.log(!(x<=20 && y<=20));

// Activity 5 - Ternary Operator
// Task 14: pgm to check a number is +ve or -ve and log result using ternary operator
let num = 1;
num > 0 ? console.log(num+" is a positive number") : console.log(num+" is a negative number");
