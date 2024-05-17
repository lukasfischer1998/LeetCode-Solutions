/**
 * Given the roots of two binary trees p and q, write a function to check if they are the same or not.
 *
 * Two binary trees are considered the same if they are structurally identical, and the nodes have the same value.
 *
 * Constraints:
 * - The number of nodes in both trees is in the range [0, 100].
 * - -104 <= Node.val <= 104
 *
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 */
var isSameTree = function(p, q) {
    if (!p && !q) return true;
    if (!p || !q) return false;
    if (p.val !== q.val) return false;
    return isSameTree(p.left, q.left) && isSameTree(p.right, q.right);
};

// Definition for a binary tree node.
function TreeNode(val, left, right) {
    this.val = (val === undefined ? 0 : val);
    this.left = (left === undefined ? null : left);
    this.right = (right === undefined ? null : right);
}

// Test cases
const tree1 = new TreeNode(1, new TreeNode(2), new TreeNode(3));
const tree2 = new TreeNode(1, new TreeNode(2), new TreeNode(3));
console.log(isSameTree(tree1, tree2)); // Expected output: true

const tree3 = new TreeNode(1, new TreeNode(2));
const tree4 = new TreeNode(1, null, new TreeNode(2));
console.log(isSameTree(tree3, tree4)); // Expected output: false

const tree5 = new TreeNode(1, new TreeNode(2, new TreeNode(1)));
const tree6 = new TreeNode(1, new TreeNode(1, null, new TreeNode(2)));
console.log(isSameTree(tree5, tree6)); // Expected output: false

// Additional test cases
const tree7 = null;
const tree8 = null;
console.log(isSameTree(tree7, tree8)); // Expected output: true

const tree9 = new TreeNode(1);
const tree10 = new TreeNode(1);
console.log(isSameTree(tree9, tree10)); // Expected output: true
