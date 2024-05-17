/**
 * 1424. Diagonal Traverse II
 * Medium
 *
 * Given a 2D integer array nums, return all elements of nums in diagonal order.
 *
 * Example 1:
 * Input: nums = [[1,2,3],[4,5,6],[7,8,9]]
 * Output: [1,4,2,7,5,3,8,6,9]
 *
 * Example 2:
 * Input: nums = [[1,2,3,4,5],[6,7],[8],[9,10,11],[12,13,14,15,16]]
 * Output: [1,6,2,8,7,3,9,4,12,10,5,13,11,14,15,16]
 *
 * Constraints:
 * 1 <= nums.length <= 10^5
 * 1 <= nums[i].length <= 10^5
 * 1 <= sum(nums[i].length) <= 10^5
 * 1 <= nums[i][j] <= 10^5
 *
 * @param {number[][]} nums
 * @return {number[]}
 */

var findDiagonalOrder = function (nums) {
  const result = [];
  const queue = [[0, 0]];

  while (queue.length > 0) {
    const [row, col] = queue.shift();
    result.push(nums[row][col]);

    const hasNextRow = row + 1 < nums.length;
    const hasNextCol = col + 1 < nums[row].length;

    if (col === 0 && hasNextRow) {
      queue.push([row + 1, 0]);
    }

    if (hasNextCol) {
      queue.push([row, col + 1]);
    }
  }

  return result;
};
// Testfall 1
console.log(
  findDiagonalOrder([
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
  ])
); // Erwartete Ausgabe: [1,4,2,7,5,3,8,6,9]

// Testfall 2
console.log(
  findDiagonalOrder([
    [1, 2, 3, 4, 5],
    [6, 7],
    [8],
    [9, 10, 11],
    [12, 13, 14, 15, 16],
  ])
); // Erwartete Ausgabe: [1,6,2,8,7,3,9,4,12,10,5,13,11,14,15,16]
