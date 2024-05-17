/**
 * Given the root of a binary tree and an integer target, delete all the leaf nodes with value target.
 *
 * Note that once you delete a leaf node with value target, if its parent node becomes a leaf node
 * and has the value target, it should also be deleted. Continue this process until you cannot delete
 * any more nodes.
 *
 * Example 1:
 * Input: root = [1,2,3,2,null,2,4], target = 2
 * Output: [1,null,3,null,4]
 * Explanation: Leaf nodes with value 2 are removed. After removing, new leaf nodes with value 2 are removed.
 *
 * Example 2:
 * Input: root = [1,3,3,3,2], target = 3
 * Output: [1,3,null,null,2]
 *
 * Example 3:
 * Input: root = [1,2,null,2,null,2], target = 2
 * Output: [1]
 *
 * Constraints:
 * - The number of nodes in the tree is in the range [1, 3000].
 * - 1 <= Node.val, target <= 1000
 *
 * @param {TreeNode} root
 * @param {number} target
 * @return {TreeNode}
 */
var removeLeafNodes = function (root, target) {
  if (!root) {
    return null;
  }

  // rec call for subtrees
  root.left = removeLeafNodes(root.left, target);
  root.right = removeLeafNodes(root.right, target);

  // if leaf && target val del
  if (!root.left && !root.right && root.val === target) {
    return null;
  }

  return root;
};

// TreeNode definition
function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val;
  this.left = left === undefined ? null : left;
  this.right = right === undefined ? null : right;
}

// Test case 1
// Input: root = [1,2,3,2,null,2,4], target = 2
// Output: [1,null,3,null,4]
const root1 = new TreeNode(
  1,
  new TreeNode(2, new TreeNode(2), null),
  new TreeNode(3, new TreeNode(2), new TreeNode(4))
);
console.log(JSON.stringify(removeLeafNodes(root1, 2))); // Expected output: {"val":1,"left":null,"right":{"val":3,"left":null,"right":{"val":4,"left":null,"right":null}}}

// Test case 2
// Input: root = [1,3,3,3,2], target = 3
// Output: [1,3,null,null,2]
const root2 = new TreeNode(
  1,
  new TreeNode(3, new TreeNode(3), new TreeNode(2)),
  null
);
console.log(JSON.stringify(removeLeafNodes(root2, 3))); // Expected output: {"val":1,"left":{"val":3,"left":null,"right":{"val":2,"left":null,"right":null}},"right":null}

// Test case 3
// Input: root = [1,2,null,2,null,2], target = 2
// Output: [1]
const root3 = new TreeNode(
  1,
  new TreeNode(2, new TreeNode(2, new TreeNode(2), null), null),
  null
);
console.log(JSON.stringify(removeLeafNodes(root3, 2))); // Expected output: {"val":1,"left":null,"right":null}
