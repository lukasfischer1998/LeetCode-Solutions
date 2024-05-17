/**
 * You are given a 0-indexed two-dimensional integer array nums.
 * Return the largest prime number that lies on at least one of the diagonals of nums.
 * If no prime is present on any of the diagonals, return 0.
 *
 * Note:
 * - An integer is prime if it is greater than 1 and has no positive integer divisors other than 1 and itself.
 * - An integer val is on one of the diagonals of nums if there exists an integer i for which nums[i][i] = val
 *   or an i for which nums[i][nums.length - i - 1] = val.
 *
 * @param {number[][]} nums
 * @return {number}
 */
var isprime = (n) => {
  if (n === 1) return false;
  for (var i = 2; i * i <= n; i++) {
    if (n % i === 0) return false;
  }
  return true;
};

var diagonalPrime = function (nums) {
  var n = nums.length;
  var diagonalValues = [];

  for (var i = 0; i < n; i++) {
    diagonalValues.push(nums[i][i]);
    diagonalValues.push(nums[i][n - i - 1]);
  }

  var mx = 0;
  for (var j = 0; j < diagonalValues.length; j++) {
    if (isprime(diagonalValues[j]) && diagonalValues[j] > mx) {
      mx = diagonalValues[j];
    }
  }

  return mx;
};

// Test cases
console.log(
  diagonalPrime([
    [1, 2, 3],
    [5, 6, 7],
    [9, 10, 11],
  ])
); // Expected output: 11
console.log(
  diagonalPrime([
    [1, 2, 3],
    [5, 17, 7],
    [9, 11, 10],
  ])
); // Expected output: 17
