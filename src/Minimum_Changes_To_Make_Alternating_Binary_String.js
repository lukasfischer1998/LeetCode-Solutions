/**
 * You are given a string s consisting only of the characters '0' and '1'.
 * In one operation, you can change any '0' to '1' or vice versa.
 *
 * The string is called alternating if no two adjacent characters are equal.
 * For example, the string "010" is alternating, while the string "0100" is not.
 *
 * Return the minimum number of operations needed to make s alternating.
 *
 * Example 1:
 *
 * Input: s = "0100"
 * Output: 1
 * Explanation: If you change the last character to '1', s will be "0101", which is alternating.
 *
 * Example 2:
 *
 * Input: s = "10"
 * Output: 0
 * Explanation: s is already alternating.
 *
 * Example 3:
 *
 * Input: s = "1111"
 * Output: 2
 * Explanation: You need two operations to reach "0101" or "1010".
 *
 * Constraints:
 *
 * 1 <= s.length <= 10^4
 * s[i] is either '0' or '1'.
 *
 * @param {string} s
 * @return {number}
 */
var minOperations = function (s) {
  let count1 = 0,
    count2 = 0;
  for (let i = 0; i < s.length; i++) {
    if (s[i] !== (i % 2 === 0 ? "0" : "1")) count1++;
    if (s[i] !== (i % 2 === 0 ? "1" : "0")) count2++;
  }
  return Math.min(count1, count2);
};

// Test case 1
let s1 = "0100";
console.log(minOperations(s1)); // Expected output: 1

// Test case 2
let s2 = "10";
console.log(minOperations(s2)); // Expected output: 0

// Test case 3
let s3 = "10010100";
console.log(minOperations(s3)); // Expected output: 3
