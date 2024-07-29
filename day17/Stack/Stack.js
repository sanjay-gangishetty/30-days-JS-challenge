// Implemented Stack using array
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
newStack.push(10);
newStack.push(20);
newStack.push(30);
newStack.push(40);
newStack.push(50);
console.log('Peek --> ',newStack.peek());
console.log('Popped --> ',newStack.pop());
newStack.displayStack();
