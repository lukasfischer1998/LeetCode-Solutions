/**
 * You are given an integer array nums with the following properties:
 *
 * nums.length == 2 * n.
 * nums contains n + 1 unique elements.
 * Exactly one element of nums is repeated n times.
 * Return the element that is repeated n times.
 *
 * Constraints:
 * - 2 <= n <= 5000
 * - nums.length == 2 * n
 * - 0 <= nums[i] <= 10^4
 * - nums contains n + 1 unique elements and one of them is repeated exactly n times.
 *
 * @param {number[]} nums
 * @return {number}
 */
var repeatedNTimes = function (nums) {
  let hashTable = {};

  for (let i = 0; i < nums.length; i++) {
    if (hashTable[nums[i]] !== undefined) {
      return nums[i];
    } else {
      hashTable[nums[i]] = true;
    }
  }
};

// Test cases
console.log(repeatedNTimes([1, 2, 3, 3])); // Expected output: 3
console.log(repeatedNTimes([2, 1, 2, 5, 3, 2])); // Expected output: 2
console.log(repeatedNTimes([5, 1, 5, 2, 5, 3, 5, 4])); // Expected output: 5
