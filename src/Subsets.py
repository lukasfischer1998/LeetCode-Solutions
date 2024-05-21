'''
78. Subsets
Medium

Given an integer array nums of unique elements, return all possible 
subsets
 (the power set).
The solution set must not contain duplicate subsets. Return the solution in any order.
 
Example 1:
Input: nums = [1,2,3]
Output: [[],[1],[2],[1,2],[3],[1,3],[2,3],[1,2,3]]

Example 2:
Input: nums = [0]
Output: [[],[0]]

Constraints:
1 <= nums.length <= 10
-10 <= nums[i] <= 10
All the numbers of nums are unique.
'''


from typing import List


class Solution:
    def subsets(self, nums: List[int]) -> List[List[int]]:
        subsets = [[]]
        for num in nums:
            new_subsets = []
            for subset in subsets:
                new_subset = subset + [num]
                new_subsets.append(new_subset)
            subsets.extend(new_subsets)
        return subsets


sol = Solution()

# ouput= [[],[1],[2],[1,2],[3],[1,3],[2,3],[1,2,3]
print(sol.subsets([1, 2, 3]))
print(sol.subsets([0]))  # ouput= [[],[0]]
