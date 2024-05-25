'''
140. Word Break II
Hard

Given a string s and a dictionary of strings wordDict, 
add spaces in s to construct a sentence where each word is a 
valid dictionary word. Return all such possible sentences in any order.
Note that the same word in the dictionary may be reused multiple times in the segmentation.

 

Example 1:
Input: s = "catsanddog", wordDict = ["cat","cats","and","sand","dog"]
Output: ["cats and dog","cat sand dog"]

Example 2:
Input: s = "pineapplepenapple", wordDict = ["apple","pen","applepen","pine","pineapple"]
Output: ["pine apple pen apple","pineapple pen apple","pine applepen apple"]
Explanation: Note that you are allowed to reuse a dictionary word.

Example 3:
Input: s = "catsandog", wordDict = ["cats","dog","sand","and","cat"]
Output: []
 

Constraints:
1 <= s.length <= 20
1 <= wordDict.length <= 1000
1 <= wordDict[i].length <= 10
s and wordDict[i] consist of only lowercase English letters.
All the strings of wordDict are unique.
Input is generated in a way that the length of the answer doesn't exceed 105.
'''


class Solution:
    def wordBreak(self, s: str, wordDict: list[str]) -> list[str]:
        word_set = set(wordDict)
        results = []
        stack = [(0, [])]

        while stack:
            start_index, current_sentence = stack.pop()
            if start_index == len(s):
                results.append(" ".join(current_sentence))
                continue

            for end_index in range(start_index + 1, len(s) + 1):
                word = s[start_index:end_index]
                if word in word_set:
                    stack.append((end_index, current_sentence + [word]))

        return results


sol = Solution()
# ouput = ["cats and dog","cat sand dog"]
print(sol.wordBreak("catsanddog", ["cat", "cats", "and", "sand", "dog"]))
# output = ["pine apple pen apple","pineapple pen apple","pine applepen apple"]
print(sol.wordBreak("pineapplepenapple", [
      "apple", "pen", "applepen", "pine", "pineapple"]))
# ouput = []
print(sol.wordBreak("catsandog", ["cats", "dog", "sand", "and", "cat"]))
