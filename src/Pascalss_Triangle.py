'''
118. Pascal's Triangle
Easy

Given an integer numRows, return the first numRows of Pascal's triangle.
In Pascal's triangle, each number is the sum of the two numbers directly above it as shown:

Example 1:
Input: numRows = 5
Output: [[1],[1,1],[1,2,1],[1,3,3,1],[1,4,6,4,1]]

Example 2:
Input: numRows = 1
Output: [[1]]
'''

from typing import List


class Solution:
    def binomialCoefficient(self, n, r):
        result = 1
        if r > n:
            return None
        for i in range(1, r + 1):
            result *= n - i + 1
            result //= i
        return result

    def generate(self, numRows: int) -> List[List[int]]:
        pascal_triangle = []
        for i in range(numRows):
            row = []
            for j in range(i + 1):
                row.append(self.binomialCoefficient(i, j))
            pascal_triangle.append(row)
        return pascal_triangle


sol = Solution()
# ouput = [[1],[1,1],[1,2,1],[1,3,3,1],[1,4,6,4,1]]
print(sol.generate(5))
print(sol.generate(1))  # ouput = [[1]]
