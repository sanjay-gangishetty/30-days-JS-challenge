// use the queue class to simulate a simple printer queue where printer jobs are added to the queue and processing in order
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

// Simulate a printer queue
class PrinterQueue {
  constructor() {
    this.queue = new Queue();
  }

  addJob(job) {
    this.queue.enqueue(job);
    console.log(`Job "${job}" added to the printer queue.`);
  }

  processJob() {
    const job = this.queue.dequeue();
    if (job !== "Queue is Empty!!") {
      console.log(`Processing job: "${job}"`);
    } else {
      console.log(job);
    }
  }

  showQueue() {
    this.queue.displayQueue();
  }
}

const printerQueue = new PrinterQueue();
printerQueue.addJob("Print document 1");
printerQueue.addJob("Print document 2");
printerQueue.addJob("Print document 3");
printerQueue.showQueue();

printerQueue.processJob();
printerQueue.processJob();
printerQueue.showQueue();

printerQueue.processJob();
printerQueue.processJob();
printerQueue.showQueue();

/* Output --------------

enqued Print document 1
Job "Print document 1" added to the printer queue.
enqued Print document 2
Job "Print document 2" added to the printer queue.
enqued Print document 3
Job "Print document 3" added to the printer queue.
-------------------- Queue --------------------
Print document 1 Print document 2 Print document 3 
dequed Print document 1
Processing job: "Print document 1"
dequed Print document 2
Processing job: "Print document 2"
-------------------- Queue --------------------
Print document 3 
dequed Print document 3
Processing job: "Print document 3"
Queue is Empty!!

*/
