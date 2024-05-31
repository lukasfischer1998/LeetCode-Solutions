'''
260. Single Number III
Medium

Given an integer array nums, in which exactly two elements 
appear only once and all the other elements appear exactly twice. 
Find the two elements that appear only once. You can return the answer in any order.
You must write an algorithm that runs in linear runtime complexity and uses only constant extra space.

 

Example 1:
Input: nums = [1,2,1,3,2,5]
Output: [3,5]
Explanation:  [5, 3] is also a valid answer.

Example 2:
Input: nums = [-1,0]
Output: [-1,0]

Example 3:
Input: nums = [0,1]
Output: [1,0]
 
Constraints:
2 <= nums.length <= 3 * 104
-231 <= nums[i] <= 231 - 1
Each integer in nums will appear twice, only two integers will appear once.
'''

from typing import List


class Solution:
    def singleNumber(self, nums: List[int]) -> List[int]:
        self.merge_sort(nums)
        result = []
        i = 0
        while i < len(nums):
            if i == len(nums) - 1 or nums[i] != nums[i + 1]:
                result.append(nums[i])
                i += 1
            else:
                i += 2
        return result

    def merge_sort(self, nums: List[int]) -> None:
        if len(nums) > 1:
            mid = len(nums) // 2
            left_half = nums[:mid]
            right_half = nums[mid:]

            self.merge_sort(left_half)
            self.merge_sort(right_half)

            i = j = k = 0

            while i < len(left_half) and j < len(right_half):
                if left_half[i] < right_half[j]:
                    nums[k] = left_half[i]
                    i += 1
                else:
                    nums[k] = right_half[j]
                    j += 1
                k += 1

            while i < len(left_half):
                nums[k] = left_half[i]
                i += 1
                k += 1

            while j < len(right_half):
                nums[k] = right_half[j]
                j += 1
                k += 1


print(Solution().singleNumber([1, 2, 1, 3, 2, 5]))  # Output: [3,5]
print(Solution().singleNumber([[-1, 0]]))  # Output: [-1,0]
print(Solution().singleNumber([[0, 1]]))  # Output: [1,0]
