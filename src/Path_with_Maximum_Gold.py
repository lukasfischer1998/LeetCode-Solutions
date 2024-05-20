'''
1219. Path with Maximum Gold
Medium

In a gold mine grid of size m x n, each cell in this mine has an integer representing the amount of gold in that cell, 0 if it is empty.
Return the maximum amount of gold you can collect under the conditions:
Every time you are located in a cell you will collect all the gold in that cell.
From your position, you can walk one step to the left, right, up, or down.
You can't visit the same cell more than once.
Never visit a cell with 0 gold.
You can start and stop collecting gold from any position in the grid that has some gold.


Example 1:
Input: grid = [[0,6,0],[5,8,7],[0,9,0]]
Output: 24
Explanation:
[[0,6,0],
 [5,8,7],
 [0,9,0]]
Path to get the maximum gold, 9 -> 8 -> 7.

Example 2:
Input: grid = [[1,0,7],[2,0,6],[3,4,5],[0,3,0],[9,0,20]]
Output: 28
Explanation:
[[1,0,7],
 [2,0,6],
 [3,4,5],
 [0,3,0],
 [9,0,20]]
Path to get the maximum gold, 1 -> 2 -> 3 -> 4 -> 5 -> 6 -> 7.


Constraints:
m == grid.length
n == grid[i].length
1 <= m, n <= 15
0 <= grid[i][j] <= 100
There are at most 25 cells containing gold.
'''


class Solution:
    def getMaximumGold(self, grid):
        m = len(grid)
        n = len(grid[0])

        max_gold = 0
        directions = [(0, 1), (0, -1), (1, 0), (-1, 0)]

        for i in range(m):
            for j in range(n):
                if grid[i][j] != 0:
                    stack = [(i, j, grid[i][j])]
                    visited = [[False] * n for _ in range(m)]

                    while stack:
                        x, y, cur_gold = stack.pop()
                        visited[x][y] = True
                        max_gold = max(max_gold, cur_gold)

                        for dx, dy in directions:
                            nx = x + dx
                            ny = y + dy
                            if 0 <= nx < m and 0 <= ny < n and not visited[nx][ny] and grid[nx][ny] != 0:
                                stack.append((nx, ny, cur_gold + grid[nx][ny]))

        return max_gold


'''
BEST SOLUTION
class Solution:
    def getMaximumGold(self, grid: List[List[int]]) -> int:
        DIRECTIONS = [0, 1, 0, -1, 0]
        rows = len(grid)
        cols = len(grid[0])
        max_gold = 0

        def dfs_backtrack(grid, rows, cols, row, col):
            # Base case: this cell is not in the matrix or has no gold
            if row < 0 or col < 0 or row == rows or col == cols or \
                    grid[row][col] == 0:
                return 0
            max_gold = 0

            # Mark the cell as visited and save the value
            original_val = grid[row][col]
            grid[row][col] = 0

            # Backtrack in each of the four directions
            for direction in range(4):
                max_gold = max(max_gold,
                               dfs_backtrack(grid, rows, cols, 
                                             DIRECTIONS[direction] + row,
                                             DIRECTIONS[direction + 1] + col))

            # Set the cell back to its original value
            grid[row][col] = original_val
            return max_gold + original_val

        # Search for the path with the maximum gold starting from each cell
        for row in range(rows):
            for col in range(cols):
                max_gold = max(max_gold, dfs_backtrack(grid, rows, cols, row, 
                                                       col))
        return max_gold
'''

sol = Solution()

print(sol.getMaximumGold([[0, 6, 0],
                          [5, 8, 7],
                          [0, 9, 0]]))  # ouput= 24

print(sol.getMaximumGold([[1, 0, 7],
                          [2, 0, 6],
                          [3, 4, 5],
                          [0, 3, 0],
                          [9, 0, 20]]))  # ouput= 28
