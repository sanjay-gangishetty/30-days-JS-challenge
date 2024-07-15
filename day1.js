// Activity 1 - Variable Declaration
var number = 10;
console.log(number);
let string = "Hello World";
console.log(string);
const boolean = true;
console.log(boolean);

const num = 10; const str = "Hello World"; const bool = true; const obj = {name: "Sanjay", age: 25}; 
const arr = [1,2,3,4,5,6];
console.log("Number :"+typeof(num));
console.log("String :"+typeof(str));
console.log("Boolean :"+typeof(bool));
console.log("Object :"+typeof(obj));
// Note - Arrays are a special type of objects. Arrays use numbers to access its "elements". Eg - arr[0], arr[1], arr[2] etc.
console.log("Array :"+typeof(arr));


let a = 10;
console.log("Before reassigning: ", a);
a = 20;
console.log("After reassigning: ", a);

// Feature request 2
// script to show difference between let and const
const any = 10; //A constant variable cannot be reassigned 

()=>{
    let letVar = 20; //A let variable can be reassigned only within the block it is defined
    console.log("Inside the function: ", letVar);
}
console.log("Outside the function: ", letVar); //This will throw an error as letVar is not defined outside the function