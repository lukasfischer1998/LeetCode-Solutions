'''
5. Longest Palindromic Substring
Medium

Given a string s, return the longest 
palindromic substring in s.

Example 1:
Input: s = "babad"
Output: "bab"
Explanation: "aba" is also a valid answer.

Example 2:
Input: s = "cbbd"
Output: "bb"
 
Constraints:
1 <= s.length <= 1000
s consist of only digits and English letters.
'''


class Solution:
    def longestPalindrome(self, s: str) -> str:
        if len(s) == 0:
            return ""

        max_length = 0
        longest_palindrome = ""

        for i in range(len(s)):
            for j in range(i + 1, len(s) + 1):
                substring = s[i:j]
                if len(substring) > max_length and substring == substring[::-1]:
                    max_length = len(substring)
                    longest_palindrome = substring

        return longest_palindrome


def test_longestPalindrome():
    solution = Solution()

    # Test case 1
    s1 = "babad"
    result1 = solution.longestPalindrome(s1)
    print(f"Input: {s1}, Output: {result1}, Expected: 'bab' or 'aba'")

    # Test case 2
    s2 = "cbbd"
    result2 = solution.longestPalindrome(s2)
    print(f"Input: {s2}, Output: {result2}, Expected: 'bb'")

    # Test case 3
    s3 = "a"
    result3 = solution.longestPalindrome(s3)
    print(f"Input: {s3}, Output: {result3}, Expected: 'a'")

    # Test case 4
    s4 = "ac"
    result4 = solution.longestPalindrome(s4)
    print(f"Input: {s4}, Output: {result4}, Expected: 'a' or 'c'")

    # Test case 5
    s5 = "racecar"
    result5 = solution.longestPalindrome(s5)
    print(f"Input: {s5}, Output: {result5}, Expected: 'racecar'")

    # Test case 6
    s6 = "abcd"
    result6 = solution.longestPalindrome(s6)
    print(f"Input: {s6}, Output: {result6}, Expected: 'a', 'b', 'c', or 'd'")

    # Test case 7
    s7 = "aabbcc"
    result7 = solution.longestPalindrome(s7)
    print(f"Input: {s7}, Output: {result7}, Expected: 'aa', 'bb', or 'cc'")

    # Test case 8
    s8 = "anana"
    result8 = solution.longestPalindrome(s8)
    print(f"Input: {s8}, Output: {result8}, Expected: 'anana'")

    # Test case 9
    s9 = "bananas"
    result9 = solution.longestPalindrome(s9)
    print(f"Input: {s9}, Output: {result9}, Expected: 'anana'")

    # Test case 10
    s10 = ""
    result10 = solution.longestPalindrome(s10)
    print(f"Input: {s10}, Output: {result10}, Expected: ''")


test_longestPalindrome()
