/**
 * Given the head of a sorted linked list, delete all duplicates such that each element appears only once.
 * Return the linked list sorted as well.
 *
 * Example 1:
 * Input: head = [1,1,2]
 * Output: [1,2]
 *
 * Example 2:
 * Input: head = [1,1,2,3,3]
 * Output: [1,2,3]
 *
 * Constraints:
 * - The number of nodes in the list is in the range [0, 300].
 * - -100 <= Node.val <= 100
 * - The list is guaranteed to be sorted in ascending order.
 */

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var deleteDuplicates = function (head) {
  if (head == null) {
    return head;
  }
  let current = head;
  while (current.next != null) {
    if (current.val === current.next.val) {
      // if double set pointer next to text
      current.next = current.next.next;
    } else {
      current = current.next;
    }
  }
  return head;
};

// Test cases
const list1 = createLinkedList([1, 1, 2]);
console.log(printLinkedList(deleteDuplicates(list1))); // Expected output: [1,2]

const list2 = createLinkedList([1, 1, 2, 3, 3]);
console.log(printLinkedList(deleteDuplicates(list2))); // Expected output: [1,2,3]

// Helper functions to create and print linked list
function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}

function createLinkedList(arr) {
  let head = new ListNode(arr[0]);
  let current = head;
  for (let i = 1; i < arr.length; i++) {
    current.next = new ListNode(arr[i]);
    current = current.next;
  }
  return head;
}

function printLinkedList(head) {
  let result = [];
  let current = head;
  while (current !== null) {
    result.push(current.val);
    current = current.next;
  }
  return result;
}
