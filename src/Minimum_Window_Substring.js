/**
 * Given two strings s and t of lengths m and n respectively, return the minimum window
 * substring of s such that every character in t (including duplicates) is included in the window.
 * If there is no such substring, return the empty string "".
 *
 * The testcases will be generated such that the answer is unique.
 *
 * Example 1:
 *
 * Input: s = "ADOBECODEBANC", t = "ABC"
 * Output: "BANC"
 * Explanation: The minimum window substring "BANC" includes 'A', 'B', and 'C' from string t.
 *
 * Example 2:
 *
 * Input: s = "a", t = "a"
 * Output: "a"
 * Explanation: The entire string s is the minimum window.
 *
 * Example 3:
 *
 * Input: s = "a", t = "aa"
 * Output: ""
 * Explanation: Both 'a's from t must be included in the window.
 * Since the largest window of s only has one 'a', return empty string.
 *
 * Constraints:
 *
 * m == s.length
 * n == t.length
 * 1 <= m, n <= 10^5
 * s and t consist of uppercase and lowercase English letters.
 *
 * Follow up: Could you find an algorithm that runs in O(m + n) time?
 *
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
function minWindow(s, t) {
  if (s.length === 0 || t.length === 0) {
    return "";
  }

  let dictT = {};
  for (let char of t) {
    if (dictT[char] == null) {
      dictT[char] = 0;
    }
    dictT[char]++;
  }

  let required = Object.keys(dictT).length;

  let l = 0,
    r = 0;

  let formed = 0;

  let windowCounts = {};

  let ans = [-1, 0, 0];

  while (r < s.length) {
    let char = s[r];
    if (windowCounts[char] == null) {
      windowCounts[char] = 0;
    }
    windowCounts[char]++;

    if (dictT[char] && windowCounts[char] === dictT[char]) {
      formed++;
    }

    while (l <= r && formed === required) {
      char = s[l];

      if (ans[0] === -1 || r - l + 1 < ans[0]) {
        ans = [r - l + 1, l, r];
      }

      windowCounts[char]--;
      if (dictT[char] && windowCounts[char] < dictT[char]) {
        formed--;
      }

      l++;
    }

    r++;
  }

  return ans[0] === -1 ? "" : s.slice(ans[1], ans[2] + 1);
}

// Test cases
console.log(minWindow("ADOBECODEBANC", "ABC")); // Expected output: "BANC"
console.log(minWindow("a", "a")); // Expected output: "a"
console.log(minWindow("a", "aa")); // Expected output: ""
