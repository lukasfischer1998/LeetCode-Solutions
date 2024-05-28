'''
1208. Get Equal Substrings Within Budget
Medium
You are given two strings s and t of the same length and an integer maxCost.
You want to change s to t. Changing the ith character of s to ith character of t 
costs |s[i] - t[i]| (i.e., the absolute difference between the ASCII values of the characters).
Return the maximum length of a substring of s that can be changed to be the 
same as the corresponding substring of t with a cost less than or equal to maxCost.
If there is no substring from s that can be changed to its corresponding substring from t, return 0.

Example 1:
Input: s = "abcd", t = "bcdf", maxCost = 3
Output: 3
Explanation: "abc" of s can change to "bcd".
That costs 3, so the maximum length is 3.

Example 2:
Input: s = "abcd", t = "cdef", maxCost = 3
Output: 1
Explanation: Each character in s costs 2 to change to character in t,  so the maximum length is 1.

Example 3:
Input: s = "abcd", t = "acde", maxCost = 0
Output: 1
Explanation: You cannot make any change, so the maximum length is 1.
 
Constraints:
1 <= s.length <= 105
t.length == s.length
0 <= maxCost <= 106
s and t consist of only lowercase English letters.
'''


class Solution:
    def equalSubstring(self, s: str, t: str, maxCost: int) -> int:
        start = 0
        currentCost = 0
        maxLength = 0

        for end in range(len(s)):
            currentCost += abs(ord(s[end]) - ord(t[end]))

            while currentCost > maxCost:
                currentCost -= abs(ord(s[start]) - ord(t[start]))
                start += 1

            maxLength = max(maxLength, end - start + 1)

        return maxLength


def test_equalSubstring():
    solution = Solution()

    # Test case 1: Provided example
    s1 = "abcd"
    t1 = "bcdf"
    maxCost1 = 3
    expected1 = 3
    assert solution.equalSubstring(s1, t1, maxCost1) == expected1, f"Test case 1 failed: expected {
        expected1}, got {solution.equalSubstring(s1, t1, maxCost1)}"

    # Test case 2: Provided example
    s2 = "abcd"
    t2 = "cdef"
    maxCost2 = 3
    expected2 = 1
    assert solution.equalSubstring(s2, t2, maxCost2) == expected2, f"Test case 2 failed: expected {
        expected2}, got {solution.equalSubstring(s2, t2, maxCost2)}"

    # Test case 3: Provided example
    s3 = "abcd"
    t3 = "acde"
    maxCost3 = 0
    expected3 = 1
    assert solution.equalSubstring(s3, t3, maxCost3) == expected3, f"Test case 3 failed: expected {
        expected3}, got {solution.equalSubstring(s3, t3, maxCost3)}"

    # Test case 4: All characters are the same
    s4 = "aaaa"
    t4 = "aaaa"
    maxCost4 = 10
    expected4 = 4
    assert solution.equalSubstring(s4, t4, maxCost4) == expected4, f"Test case 4 failed: expected {
        expected4}, got {solution.equalSubstring(s4, t4, maxCost4)}"

    # Test case 5: Maximum cost is enough for the whole string
    s5 = "abcd"
    t5 = "bcda"
    maxCost5 = 10
    expected5 = 4
    assert solution.equalSubstring(s5, t5, maxCost5) == expected5, f"Test case 5 failed: expected {
        expected5}, got {solution.equalSubstring(s5, t5, maxCost5)}"

    print("All test cases passed!")


test_equalSubstring()
