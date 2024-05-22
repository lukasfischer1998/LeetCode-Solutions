'''
131. Palindrome Partitioning
Medium

Given a string s, partition s such that every substring
 of the partition is a palindrome
Return all possible palindrome partitioning of s.

Example 1:
Input: s = "aab"
Output: [["a","a","b"],["aa","b"]]

Example 2:
Input: s = "a"
Output: [["a"]]

Constraints:
1 <= s.length <= 16
s contains only lowercase English letters.
'''

from typing import List


class Solution:
    def partition(self, s):
        def isPalindrome(sub):
            return sub == sub[::-1]

        result = []
        n = len(s)
        stack = [(0, [])]

        while stack:
            start, path = stack.pop()

            if start == n:
                result.append(path)
                continue

            for end in range(start + 1, n + 1):
                substring = s[start:end]
                if isPalindrome(substring):
                    stack.append((end, path + [substring]))

        return result


# Test cases
sol = Solution()
print(sol.partition("aab"))  # Output: [["a","a","b"],["aa","b"]]
print(sol.partition("a"))    # Output: [["a"]]
