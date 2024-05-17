/**
 * Given a string path, where path[i] = 'N', 'S', 'E' or 'W', each representing
 * moving one unit north, south, east, or west, respectively. You start at the
 * origin (0, 0) on a 2D plane and walk on the path specified by path.
 *
 * Return true if the path crosses itself at any point, that is, if at any time
 * you are on a location you have previously visited. Return false otherwise.
 *
 * Constraints:
 * - 1 <= path.length <= 10^4
 * - path[i] is either 'N', 'S', 'E', or 'W'.
 *
 * @param {string} path
 * @return {boolean}
 */
function checkForDuplicates(array) {
  const seen = new Set();
  for (const subArray of array) {
    const subArrayString = JSON.stringify(subArray);
    if (seen.has(subArrayString)) {
      return true;
    }
    seen.add(subArrayString);
  }
  return false;
}

var isPathCrossing = function (path) {
  let x = 0,
    y = 0;
  let visited = [];
  visited.push([x, y]);

  // Iterate
  for (let i = 0; i < path.length; i++) {
    if (path[i] === "N") {
      y += 1;
    } else if (path[i] === "S") {
      y -= 1;
    } else if (path[i] === "E") {
      x += 1;
    } else if (path[i] === "W") {
      x -= 1;
    }
    visited.push([x, y]);
  }
  return checkForDuplicates(visited);
};

// Test cases
console.log(isPathCrossing("NES")); // Expected output: false
console.log(isPathCrossing("NESWW")); // Expected output: true
