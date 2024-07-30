// Implement a queue class with methods enqueue(add), dequeue(remove) and front(peek).
class Queue {
  arr = [];
  constructor() {}
  enqueue(data) {
    this.arr.push(data);
    console.log("enqued " + data);
  }

  dequeue() {
    if (this.arr.length == 0) return "Queue is Empty!!";
    console.log("dequed " + this.arr[0]);
    return this.arr.shift();
  }

  front() {
    if (this.arr.length === 0) return "Queue is Empty!!";
    return this.arr[0];
  }

  size() {
    return this.arr.length;
  }

  displayQueue() {
    if (this.arr.length === 0) return "Queue is Empty!!";
    console.log("-------------------- Queue --------------------");
    let list = "";
    for (let i = 0; i < this.arr.length; i++) {
      list += this.arr[i] + " ";
    }
    console.log(list);
  }
}

const q = new Queue();
q.enqueue(1);
q.enqueue(2);
q.enqueue(3);
q.enqueue(4);
q.enqueue(5);
q.enqueue(6);
q.enqueue(7);
q.displayQueue();
q.dequeue();
q.dequeue();
q.displayQueue();

/* Output ----------
enqued 1
enqued 2
enqued 3
enqued 4
enqued 5
enqued 6
enqued 7
-------------------- Queue --------------------
1 2 3 4 5 6 7 
dequed 1
dequed 2
-------------------- Queue --------------------
3 4 5 6 7 
*/
