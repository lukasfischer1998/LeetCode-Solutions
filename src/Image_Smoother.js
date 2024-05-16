/**
 * An image smoother is a filter of the size 3 x 3 that can be applied to each cell of an image by rounding down the average of the cell and the eight surrounding cells.
 * Given an m x n integer matrix img representing the grayscale of an image, return the image after applying the smoother on each cell of it.
 *
 * Example 1:
 * Input: img = [[1,1,1],[1,0,1],[1,1,1]]
 * Output: [[0,0,0],[0,0,0],[0,0,0]]
 * Explanation:
 * For the points (0,0), (0,2), (2,0), (2,2): floor(3/4) = floor(0.75) = 0
 * For the points (0,1), (1,0), (1,2), (2,1): floor(5/6) = floor(0.83333333) = 0
 * For the point (1,1): floor(8/9) = floor(0.88888889) = 0
 *
 * Example 2:
 * Input: img = [[100,200,100],[200,50,200],[100,200,100]]
 * Output: [[137,141,137],[141,138,141],[137,141,137]]
 * Explanation:
 * For the points (0,0), (0,2), (2,0), (2,2): floor((100+200+200+50)/4) = floor(137.5) = 137
 * For the points (0,1), (1,0), (1,2), (2,1): floor((200+200+50+200+100+100)/6) = floor(141.666667) = 141
 * For the point (1,1): floor((50+200+200+200+200+100+100+100+100)/9) = floor(138.888889) = 138
 *
 * Constraints:
 * m == img.length
 * n == img[i].length
 * 1 <= m, n <= 200
 * 0 <= img[i][j] <= 255
 *
 * @param {number[][]} img
 * @return {number[][]}
 */
var imageSmoother = function (img) {
  let result = new Array(img.length)
    .fill(0)
    .map(() => new Array(img[0].length).fill(0));
  for (let i = 0; i < img.length; i++) {
    for (let j = 0; j < img[0].length; j++) {
      let sum = img[i][j];
      let count = 1;

      // Check if edge
      if (
        i === 0 ||
        j === 0 ||
        i === img.length - 1 ||
        j === img[0].length - 1
      ) {
        // edge
        if (i - 1 >= 0) {
          sum += img[i - 1][j];
          count++;
          if (j - 1 >= 0) {
            sum += img[i - 1][j - 1];
            count++;
          }
          if (j + 1 < img[0].length) {
            sum += img[i - 1][j + 1];
            count++;
          }
        }
        if (i + 1 < img.length) {
          sum += img[i + 1][j];
          count++;
          if (j - 1 >= 0) {
            sum += img[i + 1][j - 1];
            count++;
          }
          if (j + 1 < img[0].length) {
            sum += img[i + 1][j + 1];
            count++;
          }
        }
        if (j - 1 >= 0) {
          sum += img[i][j - 1];
          count++;
        }
        if (j + 1 < img[0].length) {
          sum += img[i][j + 1];
          count++;
        }
      } else {
        // not edge
        sum +=
          img[i - 1][j] +
          img[i + 1][j] +
          img[i][j - 1] +
          img[i][j + 1] +
          img[i - 1][j - 1] +
          img[i - 1][j + 1] +
          img[i + 1][j - 1] +
          img[i + 1][j + 1];
        count = 9;
      }

      // Berechne den Durchschnitt und weise ihn der entsprechenden Zelle in der Ergebnismatrix zu
      result[i][j] = Math.floor(sum / count);
    }
  }
  return result;
};
//HELPERFUNC Print
function printArray(arr) {
  for (let i = 0; i < arr.length; i++) {
    let row = "";
    for (let j = 0; j < arr[i].length; j++) {
      row += arr[i][j] + " ";
    }
    console.log("[" + row.trim() + "]");
  }
}

// Test case 1
console.log(
  printArray(
    imageSmoother([
      [1, 1, 1],
      [1, 0, 1],
      [1, 1, 1],
    ])
  )
); // Expected output: [[0,0,0],[0,0,0],[0,0,0]]

// Test case 2
console.log(
  printArray(
    imageSmoother([
      [100, 200, 100],
      [200, 50, 200],
      [100, 200, 100],
    ])
  )
); // Expected output: [[137,141,137],[141,138,141],[137,141,137]]
