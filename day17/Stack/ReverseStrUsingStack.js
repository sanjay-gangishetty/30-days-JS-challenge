// use the stack class to reverse a string by pushing all characters onto the stack and popping them off
class stack{
  constructor(){
    this.arr = [];
  }
  push(data){
    this.arr.push(data);
    console.log("pushed "+data);
  }
  pop(){
    if(this.arr.length == 0) return "Stack is Empty!!";
    return this.arr.pop();
  }
  peek(){
    if(this.arr.length == 0) return "Stack is Empty!!";
    return this.arr[this.arr.length - 1];
  }
  displayStack(){
    if(this.arr.length == 0) return "Stack is Empty!!";
    // while(this.arr.length != 0){
    //   console.table(this.pop());
    // }
    console.log("----------------------- Stack -----------------------");
    for (let i = this.arr.length - 1; i >= 0; i--) {
      console.log("| " + this.arr[i] + " |");
      console.log("------");
    }
  }
}

const newStack = new stack();
const str = "Hello";
const splitStr = str.split("");
for(let i = 0;i<splitStr.length;i++){
  newStack.push(splitStr[i]);
}
let reveredStr = "";
for(let i = 0;i<splitStr.length;i++){
  reveredStr+=newStack.pop();
}
console.log("Reversed string : "+reveredStr);
newStack.displayStack();

/* ------------------------------------------ Output ------------------------------------------
pushed H
pushed e
pushed l
pushed l
pushed o
Reversed string : olleH
*/
