/**
 * Given the root of a full binary tree, return the boolean result of evaluating the tree.
 *
 * Leaf nodes have either the value 0 or 1, where 0 represents False and 1 represents True.
 * Non-leaf nodes have either the value 2 or 3, where 2 represents the boolean OR and 3 represents the boolean AND.
 *
 * The evaluation of a node is as follows:
 * - If the node is a leaf node, the evaluation is the value of the node, i.e. True or False.
 * - Otherwise, evaluate the node's two children and apply the boolean operation of its value with the children's evaluations.
 *
 * Return the boolean result of evaluating the root node.
 *
 * A full binary tree is a binary tree where each node has either 0 or 2 children.
 * A leaf node is a node that has zero children.
 *
 * Example 1:
 * Input: root = [2,1,3,null,null,0,1]
 * Output: true
 * Explanation: The above diagram illustrates the evaluation process.
 * The AND node evaluates to False AND True = False.
 * The OR node evaluates to True OR False = True.
 * The root node evaluates to True, so we return true.
 *
 * Example 2:
 * Input: root = [0]
 * Output: false
 * Explanation: The root node is a leaf node and it evaluates to false, so we return false.
 *
 * Constraints:
 * - The number of nodes in the tree is in the range [1, 1000].
 * - 0 <= Node.val <= 3
 * - Every node has either 0 or 2 children.
 * - Leaf nodes have a value of 0 or 1.
 * - Non-leaf nodes have a value of 2 or 3.
 *
 * @param {TreeNode} root
 * @return {boolean}
 */
// 0 false, 1 true, 2 or, 3 and
var evaluateTree = function (root) {
  // basecase
  if (!root.left && !root.right) {
    return root.val === 1;
  }

  // recuriv
  const leftValue = evaluateTree(root.left);
  const rightValue = evaluateTree(root.right);

  if (root.val === 2) {
    return leftValue || rightValue;
  } else if (root.val === 3) {
    return leftValue && rightValue;
  }

  return false; // Safety
};

//def TreeNode
function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val;
  this.left = left === undefined ? null : left;
  this.right = right === undefined ? null : right;
}

// Test case 1
// Input: root = [2,1,3,null,null,0,1]
// Output: true
const root1 = new TreeNode(
  2,
  new TreeNode(1),
  new TreeNode(3, new TreeNode(0), new TreeNode(1))
);
console.log(evaluateTree(root1)); // Expected output: true

// Test case 2
// Input: root = [0]
// Output: false
const root2 = new TreeNode(0);
console.log(evaluateTree(root2)); // Expected output: false
