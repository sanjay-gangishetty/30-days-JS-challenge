// Activity 1 : For Loop
// Task 1 - print nos from 1 to 10 using for loop
for(let i=1;i<=10;i++){
    console.log(i);
}
// Task 2 - print multiplication table of 5 using for loop
for(let i=1;i<=10;i++){
    console.log("5*"+i+"="+(5*i));
}

// Activity 2 - While loop
// Task 3 - calculate sum of numbers from 1 to 10 using while
var i = 0;
let num = 0;
while(i<=10){
  num+=i;
  i++;
}
console.log(num);

// Task 4 - Print numbers from 10 to 1 using while
i = 10;
while(i>0){
  console.log(i);
  i--;
}

// Activity 3 - Do... While Loop
// Task 5 - Print numbers from 1 to 5 using do...while
// Note - Diff b/w while and do...while is, do...while executes at least one time if the condition is not satisfied and while does not.
// While first checks condtion and executes if satisfied but do...while executes then checks condtion.
i = 1;
do{
  console.log(i);
  i++;
}while(i<=5)
// Output - 1,2,3,4,5
i = 1;
do{
  console.log(i);
  i++;
}while(i>5)
// Output - 1 --> Here the condition is not satisfied but loop executes one time.

// Task 6 - Calculate the factorial of a number using do..while
num = 5;
var i = 1;
var result = 1;
do{
  result*=i;
  i++;
}while(i<=num);
console.log(result);

// Activity 4 - Nested for Loops
// Task 7 - Print upperleft star triangle using nested for loop
var i = 1;
for(i;i<=5;i++){
  let pattern = "";
  for(let j=1;j<=i;j++){
    pattern+="* ";
  }
  console.log(pattern);
}
// Output -
// *
// * *
// * * *
// * * * *
// * * * * *

// Activity 5 - Loop Control Statements
// Task 8 - Print 1 to 10 but skip 5 using continue
i = 1;
for(i;i<=10;i++){
  if(i == 5) continue;
  console.log(i);
}
// Output - 1,2,3,4,6,7,8,9,10
// Task 9 - Print 1 to 10 but stop loop at 7 using break
var i = 1;
for(i;i<=10;i++){
  if(i == 7) break;
  console.log(i);
}
// Output - 1,2,3,4,5,6