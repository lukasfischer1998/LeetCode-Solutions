/**
 * Given the root of a binary tree, return the inorder traversal of its nodes' values.
 *
 * Constraints:
 * - The number of nodes in the tree is in the range [0, 100].
 * - -100 <= Node.val <= 100
 *
 * @param {TreeNode} root
 * @return {number[]}
 */
var inorderTraversal = function (root) {
  const result = [];
  inorderHelper(root, result);
  return result;
};

/**
 * Iterative solution for inorder traversal.
 *
 * @param {TreeNode} root
 * @return {number[]}
 */

// Stack class
class Stack {
  constructor() {
    this.items = [];
  }

  push(element) {
    this.items.push(element);
  }

  pop() {
    if (this.isEmpty()) {
      return "Underflow";
    }
    return this.items.pop();
  }

  isEmpty() {
    return this.items.length === 0;
  }

  peek() {
    if (this.isEmpty()) {
      return "Underflow";
    }
    return this.items[this.items.length - 1];
  }
}
var inorderTraversal = function (root) {
  let stack = new Stack();
  let result = [];
  let current = root;

  while (current !== null || !stack.isEmpty()) {
    while (current !== null) {
      stack.push(current);
      current = current.left;
    }
    current = stack.pop();
    result.push(current.val);
    current = current.right;
  }
  return result;
};

// Definition for a binary tree node.
function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val;
  this.left = left === undefined ? null : left;
  this.right = right === undefined ? null : right;
}

// Test cases
const tree1 = new TreeNode(1, null, new TreeNode(2, new TreeNode(3), null));
console.log(inorderTraversal(tree1)); // Expected output: [1, 3, 2]

const tree2 = null;
console.log(inorderTraversal(tree2)); // Expected output: []

const tree3 = new TreeNode(1);
console.log(inorderTraversal(tree3)); // Expected output: [1]

// Additional test cases
const tree4 = new TreeNode(1, new TreeNode(2), new TreeNode(3));
console.log(inorderTraversal(tree4)); // Expected output: [2, 1, 3]

const tree5 = new TreeNode(1, new TreeNode(2, new TreeNode(3)));
console.log(inorderTraversal(tree5)); // Expected output: [3, 2, 1]
