/**
 * https://leetcode.com/problems/find-the-safest-path-in-a-grid/description/?envType=daily-question&envId=2024-05-15
 * You are given a 0-indexed 2D matrix grid of size n x n, where (r, c) represents:
 * - A cell containing a thief if grid[r][c] = 1
 * - An empty cell if grid[r][c] = 0
 * You are initially positioned at cell (0, 0). In one move, you can move to any adjacent cell in the grid, including cells containing thieves.
 * The safeness factor of a path on the grid is defined as the minimum Manhattan distance from any cell in the path to any thief in the grid.
 * Return the maximum safeness factor of all paths leading to cell (n - 1, n - 1).
 *
 * An adjacent cell of cell (r, c), is one of the cells (r, c + 1), (r, c - 1), (r + 1, c) and (r - 1, c) if it exists.
 * The Manhattan distance between two cells (a, b) and (x, y) is equal to |a - x| + |b - y|, where |val| denotes the absolute value of val.
 *
 * Example 1:
 * Input: grid = [[1,0,0],[0,0,0],[0,0,1]]
 * Output: 0
 * Explanation: All paths from (0, 0) to (n - 1, n - 1) go through the thieves in cells (0, 0) and (n - 1, n - 1).
 *
 * Example 2:
 * Input: grid = [[0,0,1],[0,0,0],[0,0,0]]
 * Output: 2
 * Explanation: The path depicted in the picture above has a safeness factor of 2 since:
 * - The closest cell of the path to the thief at cell (0, 2) is cell (0, 0). The distance between them is | 0 - 0 | + | 0 - 2 | = 2.
 * It can be shown that there are no other paths with a higher safeness factor.
 *
 * Constraints:
 * 1 <= grid.length == n <= 400
 * grid[i].length == n
 * grid[i][j] is either 0 or 1.
 * There is at least one thief in the grid.
 *
 * @param {number[][]} grid
 * @return {number}
 */

// check if cell inside boundaris
function isInBound(r, c, n) {
  if (r >= 0 && r < n && c >= 0 && c < n) {
    return true;
  } else {
    return false;
  }
}

// min way
function calculateDistances(grid, n) {
  const dist = new Array(n).fill(0).map(function () {
    return new Array(n).fill(Infinity);
  });
  const queue = [];

  for (let r = 0; r < n; r++) {
    for (let c = 0; c < n; c++) {
      if (grid[r][c] === 1) {
        dist[r][c] = 0;
        queue.push([r, c]);
      }
    }
  }

  while (queue.length) {
    const cell = queue.shift();
    const r = cell[0];
    const c = cell[1];
    const neighbors = [
      [r + 1, c],
      [r - 1, c],
      [r, c + 1],
      [r, c - 1],
    ];

    for (const neighbor of neighbors) {
      const nr = neighbor[0];
      const nc = neighbor[1];
      if (isInBound(nr, nc, n) && dist[nr][nc] === Infinity) {
        dist[nr][nc] = dist[r][c] + 1;
        queue.push([nr, nc]);
      }
    }
  }

  return dist;
}

// Max Safe for each Cell
function calculateMaxSafenessFactor(distances, n) {
  const maxDistance = new Array(n).fill(0).map(function () {
    return new Array(n).fill(0);
  });
  const queue = [[0, 0]];
  maxDistance[0][0] = distances[0][0];

  while (queue.length) {
    const cell = queue.shift();
    const r = cell[0];
    const c = cell[1];
    const neighbors = [
      [r + 1, c],
      [r - 1, c],
      [r, c + 1],
      [r, c - 1],
    ];

    for (const neighbor of neighbors) {
      const nr = neighbor[0];
      const nc = neighbor[1];
      if (isInBound(nr, nc, n)) {
        const newDistance = Math.min(maxDistance[r][c], distances[nr][nc]);
        if (newDistance > maxDistance[nr][nc]) {
          maxDistance[nr][nc] = newDistance;
          queue.push([nr, nc]);
        }
      }
    }
  }

  return maxDistance[n - 1][n - 1];
}

// Main
function maximumSafenessFactor(grid) {
  const n = grid.length;
  const distances = calculateDistances(grid, n);
  return calculateMaxSafenessFactor(distances, n);
}

// Test cases
console.log(
  maximumSafenessFactor([
    [1, 0, 0],
    [0, 0, 0],
    [0, 0, 1],
  ])
); // Expected output: 0
console.log(
  maximumSafenessFactor([
    [0, 0, 1],
    [0, 0, 0],
    [0, 0, 0],
  ])
); // Expected output: 2
console.log(
  maximumSafenessFactor([
    [0, 0, 0, 1],
    [0, 0, 0, 0],
    [0, 0, 0, 0],
    [1, 0, 0, 0],
  ])
); // Expected output: 2
