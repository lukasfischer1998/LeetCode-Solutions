/**
 * Given n points on a 2D plane where points[i] = [xi, yi], return the widest vertical area between two points such that no points are inside the area.
 *
 * A vertical area is an area of fixed-width extending infinitely along the y-axis (i.e., infinite height). The widest vertical area is the one with the maximum width.
 *
 * Note that points on the edge of a vertical area are not considered included in the area.

 * Example 1:
 * Input: points = [[8,7],[9,9],[7,4],[9,7]]
 * Output: 1
 * Explanation: Both the red and the blue area are optimal.
 *
 * Example 2:
 * Input: points = [[3,1],[9,0],[1,0],[1,4],[5,3],[8,8]]
 * Output: 3
 *
 * Constraints:
 * - n == points.length
 * - 2 <= n <= 10^5
 * - points[i].length == 2
 * - 0 <= xi, yi <= 10^9
 */
/**
 * @param {number[][]} points
 * @return {number}
 */

var maxWidthOfVerticalArea = function (points) {
  // Get x points
  const xValues = [];
  let widestsum = 0;
  for (let i = 0; i < points.length; i++) {
    xValues.push(points[i][0]);
  }
  xValues.sort((a, b) => a - b);

  for (let index = 0; index < xValues.length; index++) {
    let temp = xValues[index + 1] - xValues[index];
    if (temp > widestsum) {
      widestsum = temp;
    } else if (temp < widestsum) {
      continue;
    }
  }
  return widestsum;
};

// Test cases
console.log(
  maxWidthOfVerticalArea([
    [8, 7],
    [9, 9],
    [7, 4],
    [9, 7],
  ])
); // Expected output: 1
console.log(
  maxWidthOfVerticalArea([
    [3, 1],
    [9, 0],
    [1, 0],
    [1, 4],
    [5, 3],
    [8, 8],
  ])
); // Expected output: 3
console.log(
  maxWidthOfVerticalArea([
    [1, 5],
    [1, 6],
    [1, 7],
    [1, 8],
  ])
); // Expected output: 0 (no vertical area between points)
