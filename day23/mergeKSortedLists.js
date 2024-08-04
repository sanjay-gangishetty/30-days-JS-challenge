// Activity 2: Merge k Sorted Lists
// Task 2: Solve the "Merge k Sorted Lists" problem on LeetCode.

// - Write a function that takes an array of k linked lists, each linked list is sorted in ascending order, and merges all the linked lists into one sorted linked list.
// - Create a few test cases with linked lists and log the merged list.
class ListNode {
  constructor(val = 0, next = null) {
    this.val = val;
    this.next = next;
  }
}

function mergeKLists(lists) {
  if (lists.length === 0) return null;

  const mergeTwoLists = (l1, l2) => {
    let dummy = new ListNode();
    let current = dummy;

    while (l1 && l2) {
      if (l1.val < l2.val) {
        current.next = l1;
        l1 = l1.next;
      } else {
        current.next = l2;
        l2 = l2.next;
      }
      current = current.next;
    }

    current.next = l1 || l2;
    return dummy.next;
  };

  while (lists.length > 1) {
    let mergedList = [];

    for (let i = 0; i < lists.length; i += 2) {
      const l1 = lists[i];
      const l2 = i + 1 < lists.length ? lists[i + 1] : null;
      mergedList.push(mergeTwoLists(l1, l2));
    }

    lists = mergedList;
  }

  return lists[0];
}

// Helper function to create linked list from array
function createLinkedList(arr) {
  let dummy = new ListNode();
  let current = dummy;

  for (let val of arr) {
    current.next = new ListNode(val);
    current = current.next;
  }

  return dummy.next;
}

// Helper function to print linked list
function printLinkedList(head) {
  let current = head;
  const result = [];

  while (current) {
    result.push(current.val);
    current = current.next;
  }

  console.log(result.join(" -> "));
}

// Test cases
let lists = [
  createLinkedList([1, 4, 5]),
  createLinkedList([1, 3, 4]),
  createLinkedList([2, 6]),
];

let mergedList = mergeKLists(lists);
printLinkedList(mergedList); // Output: 1 -> 1 -> 2 -> 3 -> 4 -> 4 -> 5 -> 6

lists = [createLinkedList([]), createLinkedList([1])];

mergedList = mergeKLists(lists);
printLinkedList(mergedList); // Output: 1

lists = [];

mergedList = mergeKLists(lists);
printLinkedList(mergedList); // Output: (empty list)
