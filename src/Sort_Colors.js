/**
 * Given an Nums Array nums with n objects colored red, white, or blue, sort them in-place so that
 * objects of the same color are adjacent, with the colors in the order red, white, and blue.
 * We will use the integers 0, 1, and 2 to represent the color red, white, and blue, respectively.
 * You must solve this problem without using the library's sort function.
 *
 * Constraints:
 * - n == nums.length
 * - 1 <= n <= 300
 * - nums[i] is either 0, 1, or 2.
 *
 * Follow up: Could you come up with a one-pass algorithm using only constant extra space?
 *
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */

var sortColors = function (nums) {
  let low = 0;
  let high = nums.length - 1;
  let mid = 0;

  while (mid <= high) {
    switch (nums[mid]) {
      case 0:
        [nums[low], nums[mid]] = [nums[mid], nums[low]];
        low++;
        mid++;
        break;
      case 1:
        mid++;
        break;
      case 2:
        [nums[mid], nums[high]] = [nums[high], nums[mid]];
        high--;
        break;
    }
  }
};

/**
 * Prints the array elements with their indices.
 * @param {any[]} arr
 */
function printArray(arr) {
  if (!Array.isArray(arr)) {
    console.log("The input is not an array");
    return;
  }

  arr.forEach(function (item, index) {
    console.log(`Index ${index}: ${item}`);
  });
}

// Test cases
let testArray1 = [2, 0, 2, 1, 1, 0];
sortColors(testArray1);
console.log("Sorted array 1:");
printArray(testArray1); // Expected output: [0, 0, 1, 1, 2, 2]

let testArray2 = [2, 0, 1];
sortColors(testArray2);
console.log("Sorted array 2:");
printArray(testArray2); // Expected output: [0, 1, 2]

let testArray3 = [0];
sortColors(testArray3);
console.log("Sorted array 3:");
printArray(testArray3); // Expected output: [0]

let testArray4 = [1];
sortColors(testArray4);
console.log("Sorted array 4:");
printArray(testArray4); // Expected output: [1]

let testArray5 = [2, 2, 1, 1, 0, 0];
sortColors(testArray5);
console.log("Sorted array 5:");
printArray(testArray5); // Expected output: [0, 0, 1, 1, 2, 2]
