/**
 * Write a function argumentsLength that returns the count of arguments passed to it.
 *
 * Constraints:
 * - args is a valid JSON array
 * - 0 <= args.length <= 100
 *
 * @param {...any} args - The arguments passed to the function.
 * @return {number} - The count of arguments passed.
 */
var argumentsLength = function (...args) {
  return args.length;
};

// Test cases
console.log(argumentsLength(5)); // Expected output: 1
console.log(argumentsLength({}, null, "3")); // Expected output: 3
console.log(argumentsLength()); // Expected output: 0
console.log(argumentsLength(1, 2, 3, 4, 5, 6, 7, 8, 9, 10)); // Expected output: 10
