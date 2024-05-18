/**
 * You are given the root of a binary tree with n nodes where each node in the tree has node.val coins.
 * There are n coins in total throughout the whole tree.
 *
 * In one move, we may choose two adjacent nodes and move one coin from one node to another.
 * A move may be from parent to child, or from child to parent.
 *
 * Return the minimum number of moves required to make every node have exactly one coin.
 *
 * Constraints:
 * - The number of nodes in the tree is n.
 * - 1 <= n <= 100
 * - 0 <= Node.val <= n
 * - The sum of all Node.val is n.
 *
 * @param {TreeNode} root
 * @return {number}
 */

var distributeCoins = function (root) {
  let mvs = 0;

  function dfs(node) {
    if (node === null) {
      return 0;
    }

    let left = dfs(node.left);
    let right = dfs(node.right);

    mvs += Math.abs(left) + Math.abs(right);
    return node.val + left + right - 1;
  }

  dfs(root);
  return mvs;
};

// bin tree def
function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val;
  this.left = left === undefined ? null : left;
  this.right = right === undefined ? null : right;
}

// Test cases
let root1 = new TreeNode(3, new TreeNode(0), new TreeNode(0));
console.log(distributeCoins(root1)); // Expected output: 2

let root2 = new TreeNode(0, new TreeNode(3), new TreeNode(0));
console.log(distributeCoins(root2)); // Expected output: 3
