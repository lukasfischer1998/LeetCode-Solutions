
'''
101. Symmetric Tree
Easy

Given the root of a binary tree, check whether it is a mirror of itself (i.e., symmetric around its center)

Example 1:
Input: root = [1,2,2,3,4,4,3]
Output: true

Example 2:
Input: root = [1,2,2,null,3,null,3]
Output: false
 
Constraints:
The number of nodes in the tree is in the range [1, 1000].
-100 <= Node.val <= 100

Follow up: Could you solve it both recursively and iteratively?

'''
from typing import Optional


class TreeNode:
    def __init__(self, val=0, left=None, right=None):
        self.val = val
        self.left = left
        self.right = right


def is_mirror(left: Optional[TreeNode], right: Optional[TreeNode]) -> bool:
    if not left and not right:
        return True
    if not left or not right:
        return False
    root_values_are_equal = left.val == right.val
    left_and_right_are_symmetric = is_mirror(left.left, right.right)
    right_and_left_are_symmetric = is_mirror(left.right, right.left)
    return root_values_are_equal and left_and_right_are_symmetric and right_and_left_are_symmetric


class Solution:
    def isSymmetric(self, root: Optional[TreeNode]) -> bool:
        if not root:
            return True
        return is_mirror(root.left, root.right)


'''
ITERATIV

class Solution:
    def isSymmetric(self, root: Optional[TreeNode]) -> bool:
        if not root:
            return True
        
        queue = deque([(root.left, root.right)])
        
        while queue:
            left, right = queue.popleft()
            
            if not left and not right:
                continue
            
            if not left or not right or left.val != right.val:
                return False
            queue.append((left.left, right.right))
            queue.append((left.right, right.left))
        
        return True
'''

symmetric_root = TreeNode(1)
symmetric_root.left = TreeNode(2)
symmetric_root.right = TreeNode(2)
symmetric_root.left.left = TreeNode(3)
symmetric_root.left.right = TreeNode(4)
symmetric_root.right.left = TreeNode(4)
symmetric_root.right.right = TreeNode(3)
non_symmetric_root = TreeNode(1)
non_symmetric_root.left = TreeNode(2)
non_symmetric_root.right = TreeNode(2)
non_symmetric_root.left.right = TreeNode(3)
non_symmetric_root.right.right = TreeNode(3)

print(Solution().isSymmetric(symmetric_root))  # TRUE
print(Solution().isSymmetric(non_symmetric_root))  # FALSE
