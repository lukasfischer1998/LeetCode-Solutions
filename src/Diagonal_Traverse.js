/**
 * 498. Diagonal Traverse
 * Medium
 *
 * Given an m x n matrix mat, return an array of all the elements of the array in a diagonal order.
 *
 * Example 1:
 * Input: mat = [
 *   [1,2,3],
 *   [4,5,6],
 *   [7,8,9]
 * ]
 * Output: [1,2,4,7,5,3,6,8,9]
 *
 * Example 2:
 * Input: mat = [
 *   [1,2],
 *   [3,4]
 * ]
 * Output: [1,2,3,4]
 *
 * @param {number[][]} mat
 * @return {number[]}
 */
var findDiagonalOrder = function (mat) {
  if (mat.length === 0 || mat[0].length === 0) {
    return [];
  }

  const mRow = mat.length;
  const nColumn = mat[0].length;
  const array = new Array(mRow * nColumn);

  let row = 0,
    column = 0;

  for (let i = 0; i < array.length; i++) {
    array[i] = mat[row][column];

    if ((row + column) % 2 === 0) {
      if (column === nColumn - 1) {
        row++;
      } else if (row === 0) {
        column++;
      } else {
        row--;
        column++;
      }
    } else {
      if (row === mRow - 1) {
        column++;
      } else if (column === 0) {
        row++;
      } else {
        row++;
        column--;
      }
    }
  }

  return array;
};
// Test cases
console.log(
  findDiagonalOrder([
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
  ])
); // Expected output: [1,2,4,7,5,3,6,8,9]
console.log(
  findDiagonalOrder([
    [1, 2],
    [3, 4],
  ])
); // Expected output: [1,2,3,4]
