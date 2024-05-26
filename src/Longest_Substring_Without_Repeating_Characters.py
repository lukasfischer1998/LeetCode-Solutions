'''
3. Longest Substring Without Repeating Characters
Medium

Given a string s, find the length of the longest 
substring without repeating characters.

 

Example 1:
Input: s = "abcabcbb"
Output: 3
Explanation: The answer is "abc", with the length of 3.

Example 2:
Input: s = "bbbbb"
Output: 1
Explanation: The answer is "b", with the length of 1.

Example 3:
Input: s = "pwwkew"
Output: 3
Explanation: The answer is "wke", with the length of 3.
Notice that the answer must be a substring, "pwke" is a subsequence and not a substring.
 
Constraints:
0 <= s.length <= 5 * 104
s consists of English letters, digits, symbols and spaces.
'''


class Solution:
    def lengthOfLongestSubstring(self, s: str) -> int:
        char_index = {}
        max_length = 0
        start = 0

        for end in range(len(s)):
            if s[end] in char_index:
                start = max(start, char_index[s[end]] + 1)
            char_index[s[end]] = end
            max_length = max(max_length, end - start + 1)

        return max_length

    def has_unique_characters_naive(self, s: str) -> bool:
        for i in range(len(s)):
            for j in range(i + 1, len(s)):
                if s[i] == s[j]:
                    return False
        return True


def run_tests():
    test_cases = [
        {"input": "abcabcbb", "expected": 3},
        {"input": "bbbbb", "expected": 1},
        {"input": "pwwkew", "expected": 3},
        {"input": "", "expected": 0},
        {"input": " ", "expected": 1},
        {"input": "au", "expected": 2},
        {"input": "dvdf", "expected": 3},
        {"input": "aabaab!bb", "expected": 3},
    ]

    solution = Solution()
    for i, test in enumerate(test_cases):
        result = solution.lengthOfLongestSubstring(test["input"])
        assert result == test["expected"], f"Test case {
            i+1} failed: input({test['input']}) => output({result}), expected({test['expected']})"
    print("All test cases passed!")


# Run the tests
run_tests()
