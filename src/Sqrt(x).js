/**
 * Given a non-negative integer x, return the square root of x rounded down to the nearest integer.
 * The returned integer should be non-negative as well.
 *
 * You must not use any built-in exponent function or operator.
 * For example, do not use pow(x, 0.5) in C++ or x ** 0.5 in Python.
 *
 * Example 1:
 * Input: x = 4
 * Output: 2
 * Explanation: The square root of 4 is 2, so we return 2.
 *
 * Example 2:
 * Input: x = 8
 * Output: 2
 * Explanation: The square root of 8 is 2.82842..., and since we round it down to the nearest integer, 2 is returned.
 *
 * Constraints:
 * - 0 <= x <= 2^31 - 1
 *
 * @param {number} x
 * @return {number}
 */
var mySqrt = function (x) {
  if (x === 0) return 0;

  let i = 1;
  while (i * i <= x) {
    i++;
  }
  return i - 1;
};
// Test cases
console.log(mySqrt(4)); // Expected output: 2
console.log(mySqrt(8)); // Expected output: 2
console.log(mySqrt(0)); // Expected output: 0
console.log(mySqrt(1)); // Expected output: 1
console.log(mySqrt(16)); // Expected output: 4
console.log(mySqrt(25)); // Expected output: 5
