/**
 * Given two binary strings a and b, return their sum as a binary string.
 *
 * Example 1:
 * Input: a = "11", b = "1"
 * Output: "100"
 *
 * Example 2:
 * Input: a = "1010", b = "1011"
 * Output: "10101"
 *
 * Constraints:
 * - 1 <= a.length, b.length <= 10^4
 * - a and b consist only of '0' or '1' characters.
 * - Each string does not contain leading zeros except for the zero itself.
 *
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function (a, b) {
  let i = a.length - 1,
    j = b.length - 1,
    carry = 0,
    result = "";

  while (i >= 0 || j >= 0 || carry > 0) {
    const sum = (+a[i] || 0) + (+b[j] || 0) + carry;
    result = (sum % 2) + result;
    carry = sum > 1 ? 1 : 0;
    i--;
    j--;
  }

  return result;
};

// Test cases
console.log(addBinary("11", "1")); // Expected output: "100"
console.log(addBinary("1010", "1011")); // Expected output: "10101"
