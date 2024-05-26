'''
2. Add Two Numbers
Medium
You are given two non-empty linked lists representing two non-negative integers. 
The digits are stored in reverse order, and each of their nodes contains a single 
digit. Add the two numbers and return the sum as a linked list.
You may assume the two numbers do not contain any leading zero, except the number 0 itself.

Example 1:
Input: l1 = [2,4,3], l2 = [5,6,4]
Output: [7,0,8]
Explanation: 342 + 465 = 807.

Example 2:
Input: l1 = [0], l2 = [0]
Output: [0]

Example 3:
Input: l1 = [9,9,9,9,9,9,9], l2 = [9,9,9,9]
Output: [8,9,9,9,0,0,0,1]

Constraints:
The number of nodes in each linked list is in the range [1, 100].
0 <= Node.val <= 9
It is guaranteed that the list represents a number that does not have leading zeros.
'''

from typing import *


class ListNode:
    def __init__(self, val=0, next=None):
        self.val = val
        self.next = next


class Solution:
    def addTwoNumbers(self, l1: Optional[ListNode], l2: Optional[ListNode]) -> Optional[ListNode]:
        num1 = ""
        num2 = ""

        while l1 is not None:
            num1 += str(l1.val)
            l1 = l1.next

        while l2 is not None:
            num2 += str(l2.val)
            l2 = l2.next

        total = int(num1[::-1]) + int(num2[::-1])

        dummy_head = ListNode(0)
        current = dummy_head

        for digit in str(total)[::-1]:
            current.next = ListNode(int(digit))
            current = current.next

        return dummy_head.next


def list_to_linkedlist(lst):
    dummy_root = ListNode(0)
    ptr = dummy_root
    for number in lst:
        ptr.next = ListNode(number)
        ptr = ptr.next
    return dummy_root.next


def linkedlist_to_list(node):
    lst = []
    current = node
    while current:
        lst.append(current.val)
        current = current.next
    return lst

# Test cases


def test_addTwoNumbers():
    # Test case 1
    l1 = list_to_linkedlist([2, 4, 3])
    l2 = list_to_linkedlist([5, 6, 4])
    assert linkedlist_to_list(Solution().addTwoNumbers(l1, l2)) == [
        7, 0, 8], "Test case 1 failed"

    # Test case 2
    l1 = list_to_linkedlist([0])
    l2 = list_to_linkedlist([0])
    assert linkedlist_to_list(Solution().addTwoNumbers(l1, l2)) == [
        0], "Test case 2 failed"

    # Test case 3
    l1 = list_to_linkedlist([9, 9, 9, 9, 9, 9, 9])
    l2 = list_to_linkedlist([9, 9, 9, 9])
    assert linkedlist_to_list(Solution().addTwoNumbers(l1, l2)) == [
        8, 9, 9, 9, 0, 0, 0, 1], "Test case 3 failed"

    # Additional test case 4
    l1 = list_to_linkedlist([1, 8])
    l2 = list_to_linkedlist([0])
    assert linkedlist_to_list(Solution().addTwoNumbers(l1, l2)) == [
        1, 8], "Test case 4 failed"

    # Additional test case 5
    l1 = list_to_linkedlist([9, 9])
    l2 = list_to_linkedlist([1])
    assert linkedlist_to_list(Solution().addTwoNumbers(l1, l2)) == [
        0, 0, 1], "Test case 5 failed"

    print("All test cases passed!")


# Run tests
test_addTwoNumbers()
