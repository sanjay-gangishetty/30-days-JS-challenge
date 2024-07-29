// Activity 1 - LinkedList Implementation in javascript
const { cpuUsage } = require("process");

class Node {
  constructor(data) {
    (this.data = data), (this.next = null);
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }

  add(data) {
    const newNode = new Node(data);
    if (this.head == null) {
      this.head = newNode;
    } else {
      let currentNode = this.head;
      while (currentNode.next != null) {
        currentNode = currentNode.next;
      }
      currentNode.next = newNode;
    }
  }

  remove() {
    if (this.head == null) {
      console.log("LL is empty!!");
      return;
    }
    if (this.head.next == null) {
      this.head = null;
      return;
    }
    let currentNode = this.head;
    let prevNode = null;
    while (currentNode.next != null) {
      prevNode = currentNode;
      currentNode = currentNode.next;
    }
    prevNode.next = null;
  }

  displayNodes() {
    if (this.head == null) {
      console.log("LL is empty!!");
      return;
    }
    let currentNode = this.head;
    let list = "";
    while (currentNode != null) {
      list += currentNode.data + "->";
      currentNode = currentNode.next;
    }
    list += "null";
    console.log(list);
  }
}

const linkedList = new LinkedList();
linkedList.add(1);
linkedList.add(2);
linkedList.add(3);
console.log("Added 3 nodes");
linkedList.displayNodes();
linkedList.remove();
console.log("Removed 1 node");
linkedList.displayNodes();

/*-------------------------------------------------------------- Output --------------------------------------------------------------
Added 3 nodes
1->2->3->null
Removed 1 node
1->2->null
*/
