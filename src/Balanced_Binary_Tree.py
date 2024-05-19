'''
110. Balanced Binary Tree
Easy
Given a binary tree, determine if it is 
height-balanced
Example 1:

Input: root = [3,9,20,null,null,15,7]
Output: true
Example 2:

Input: root = [1,2,2,3,3,null,null,4,4]
Output: false
Example 3:

Input: root = []
Output: true
 
Constraints:

The number of nodes in the tree is in the range [0, 5000].
-104 <= Node.val <= 104
'''


class TreeNode:
    def __init__(self, val=0, left=None, right=None):
        self.val = val
        self.left = left
        self.right = right


class Solution:
    def isBalanced(self, root):
        def findHeight(root):
            if root is None:
                return 0
            left = findHeight(root.left)
            right = findHeight(root.right)

            difference = left - right

            if left == -1 or right == -1 or difference > 1 or difference < -1:
                return -1

            return max(left, right) + 1

        if findHeight(root) == -1:
            return False
        return True


# Testcases:
root1 = TreeNode(3)
root1.left = TreeNode(9)
root1.right = TreeNode(20)
root1.right.left = TreeNode(15)
root1.right.right = TreeNode(7)
sol = Solution()
print(sol.isBalanced(root1))  # Output: True

root2 = TreeNode(1)
root2.left = TreeNode(2)
root2.right = TreeNode(2)
root2.left.left = TreeNode(3)
root2.left.right = TreeNode(3)
root2.left.left.left = TreeNode(4)
root2.left.left.right = TreeNode(4)
sol = Solution()
print(sol.isBalanced(root2))  # Output: False

root3 = None
sol = Solution()
print(sol.isBalanced(root3))  # Output: True
