'''
125. Valid Palindrome
Easy

A phrase is a palindrome if, after converting all uppercase letters into lowercase letters 
and removing all non-alphanumeric characters, it reads the same forward and backward. 
Alphanumeric characters include letters and numbers.
Given a string s, return true if it is a palindrome, or false otherwise.

Example 1:
Input: s = "A man, a plan, a canal: Panama"
Output: true
Explanation: "amanaplanacanalpanama" is a palindrome.

Example 2:
Input: s = "race a car"
Output: false
Explanation: "raceacar" is not a palindrome.

Example 3:
Input: s = " "
Output: true
Explanation: s is an empty string "" after removing non-alphanumeric characters.
Since an empty string reads the same forward and backward, it is a palindrome.
 
Constraints:
1 <= s.length <= 2 * 105
s consists only of printable ASCII characters.
'''


class Solution:
    def isPalindrome(self, s: str) -> bool:
        if s == " ":
            return True
        
        res = ""
        
        for char in s:
            if ord(char) >= 65 and ord(char) <= 90:
                
                res+=(chr(ord(char) + 32))
            elif ord(char) >= 97 and ord(char) <= 122:
                res +=(char)
            elif char.isdigit():
                res += char

        if res == res[::-1]:
            return True
        else:
            return False


sol = Solution()
print(sol.isPalindrome("A man, a plan, a canal: Panama"))  # ouput = true
print(sol.isPalindrome("race a car"))  # ouput = false
