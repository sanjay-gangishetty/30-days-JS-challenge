// Activity 1 - If else stmts
// Task 1 : pgm to check a num is +ve or -ve or 0 and log result
let num = 1;
if(num == 0){
    console.log("Zero");
}else if(num>0){
    console.log("+ve Number");
}else{
    console.log("-ve Number");
}

// Task 2 : Check if a person is eligible to vote
let age = 19;
if(age>=18){
    console.log("You are eligible to Vote.");
}else{
    console.log("Not eligible");
}

// Activity 2 - Nested If stmts
// Task 3 : Find largest among 3 numbers using nested if
let a=10, b=20, c=30;
if(a>b && a>c){
    console.log("A is greater than B and C");
}else if(b>a && b>c){
    console.log("B is greater than A and C");
}else{
    console.log("C is greater than A and B");
}
// Activity 3 - Switch Case
// Task 4 : destermine day of week based on number (1-7) and log day name
let day = 1;
switch (day) {
    case 1:
        console.log("Monday");
        break;
    case 2:
        console.log("Tuesday");
        break;
    case 3:
        console.log("Wednesday");
        break;
    case 4:
        console.log("Thursday");
        break;
    case 5:
        console.log("Friday");
        break;
    case 6:
        console.log("Saturday");
        break;
    default:
        console.log("Sunday");
        break;
}

// Activity 4 - Ternary Operator
// Task 6 : check odd or even
let number = 1;
number%2 == 0 ? console.log("Even Number") : console.log("Odd Number");

// Activity 5 - Combining conditions
// Task 7 : Check if a year is leap year
// Note - A year is a leap year if “any one of ” the following conditions are satisfied: 
// 1. The year is multiple of 400.
// 2. The year is a multiple of 4 and not a multiple of 100.
const year = 2002;
if((year%400 == 0) || ((year%100 != 0) && (year%4==0))){
    console.log("Leap Year");
}else{
    console.log("Not leap year");
}
