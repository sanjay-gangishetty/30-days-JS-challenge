// Activity 1: Add Two Numbers
// Task 1: Solve the "Add Two Numbers" problem on LeetCode.

// - Write a function that takes two non-empty linked lists representing two non-negative integers.
// - The digits are stored in reverse order, and each node contains a single digit. Add the two numbers and return the sum as a linked list.
// - Create a few test cases with linked lists and log the sum as a linked list.

class ListNode {
  constructor(val = 0, next = null) {
    this.val = val;
    this.next = next;
  }
}

function addTwoNumbers(l1, l2) {
  let dummy = new ListNode();
  let current = dummy;
  let carry = 0;

  while (l1 !== null || l2 !== null || carry !== 0) {
    let sum = carry;
    if (l1 !== null) {
      sum += l1.val;
      l1 = l1.next;
    }
    if (l2 !== null) {
      sum += l2.val;
      l2 = l2.next;
    }

    carry = Math.floor(sum / 10);
    current.next = new ListNode(sum % 10);
    current = current.next;
  }

  return dummy.next;
}

// Helper function to convert an array to a linked list
function arrayToLinkedList(arr) {
  let dummy = new ListNode();
  let current = dummy;
  for (let val of arr) {
    current.next = new ListNode(val);
    current = current.next;
  }
  return dummy.next;
}

// Helper function to print a linked list
function printLinkedList(list) {
  let arr = [];
  while (list !== null) {
    arr.push(list.val);
    list = list.next;
  }
  console.log(arr);
}

// Test cases
let list1 = arrayToLinkedList([2, 4, 3]); // represents 342
let list2 = arrayToLinkedList([5, 6, 4]); // represents 465

let sumList = addTwoNumbers(list1, list2);
printLinkedList(sumList); // Output: [7, 0, 8] which represents 807

// Additional test cases
let list3 = arrayToLinkedList([0]);
let list4 = arrayToLinkedList([0]);
let sumList2 = addTwoNumbers(list3, list4);
printLinkedList(sumList2); // Output: [0]

let list5 = arrayToLinkedList([9, 9, 9, 9, 9, 9, 9]); // represents 9999999
let list6 = arrayToLinkedList([9, 9, 9, 9]); // represents 9999
let sumList3 = addTwoNumbers(list5, list6);
printLinkedList(sumList3); // Output: [8, 9, 9, 9, 0, 0, 0, 1] which represents 10009998
