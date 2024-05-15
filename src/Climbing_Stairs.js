/**
 * You are climbing a staircase. It takes n steps to reach the top.
 *
 * Each time you can either climb 1 or 2 steps. In how many distinct ways can you climb to the top?
 *
 * Example 1:
 * Input: n = 2
 * Output: 2
 * Explanation: There are two ways to climb to the top.
 * 1. 1 step + 1 step
 * 2. 2 steps
 *
 * Example 2:
 * Input: n = 3
 * Output: 3
 * Explanation: There are three ways to climb to the top.
 * 1. 1 step + 1 step + 1 step
 * 2. 1 step + 2 steps
 * 3. 2 steps + 1 step
 *
 * Constraints:
 * - 1 <= n <= 45
 *
 * @param {number} n
 * @return {number}
 */
function climbStairs(n) {
  if (n <= 1) return 1;

  const dp = new Array(n + 1).fill(0);

  dp[1] = 1;
  dp[0] = 1;

  for (let i = 2; i <= n; i++) {
    dp[i] = dp[i - 1] + dp[i - 2];
  }

  return dp[n];
}
// Test cases
console.log(climbStairs(2)); // Expected output: 2
console.log(climbStairs(3)); // Expected output: 3
console.log(climbStairs(1)); // Expected output: 1
console.log(climbStairs(4)); // Expected output: 5
console.log(climbStairs(5)); // Expected output: 8
