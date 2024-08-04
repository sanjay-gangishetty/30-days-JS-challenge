// Activity 4 - Merge Two Sorted Lists
// Task 4 - Solve the "Merge Two Sorted Lists" problem on LeetCode.
// - write a function that takes two sorted lists and returns a new sorted list by merging them.
// - create a few test cases with linked lists and log the merged list.

class ListNode {
  constructor(val = 0, next = null) {
    this.val = val;
    this.next = next;
  }
}

function mergeTwoLists(list1, list2) {
  let dummy = new ListNode(); // Dummy node to simplify edge cases
  let current = dummy;

  while (list1 !== null && list2 !== null) {
    if (list1.val < list2.val) {
      current.next = list1;
      list1 = list1.next;
    } else {
      current.next = list2;
      list2 = list2.next;
    }
    current = current.next;
  }

  // If any elements are left in either list, append them
  if (list1 !== null) {
    current.next = list1;
  } else {
    current.next = list2;
  }

  return dummy.next; // Return the next node to skip the dummy
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
let list1 = arrayToLinkedList([1, 2, 4]);
let list2 = arrayToLinkedList([1, 3, 4]);

let mergedList = mergeTwoLists(list1, list2);
printLinkedList(mergedList); // Output: [1, 1, 2, 3, 4, 4]
