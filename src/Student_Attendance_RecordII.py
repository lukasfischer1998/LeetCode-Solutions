'''
552. Student Attendance Record II
Hard
Topics
Companies
An attendance record for a student can be represented as a 
string where each character signifies whether the student was 
absent, late, or present on that day. The record only contains the following three characters:

'A': Absent.
'L': Late.
'P': Present.

Any student is eligible for an attendance award if they meet both of the following criteria:
The student was absent ('A') for strictly fewer than 2 days total.
The student was never late ('L') for 3 or more consecutive days.
Given an integer n, return the number of possible attendance records 
of length n that make a student eligible for an attendance award. The answer may be very large, so return it modulo 109 + 7.

 
Example 1:
Input: n = 2
Output: 8
Explanation: There are 8 records with length 2 that are eligible for an award:
"PP", "AP", "PA", "LP", "PL", "AL", "LA", "LL"
Only "AA" is not eligible because there are 2 absences (there need to be fewer than 2).

Example 2:
Input: n = 1
Output: 3

Example 3:
Input: n = 10101
Output: 183236316
 
Constraints:
1 <= n <= 105
'''


class Solution:
    def checkRecord(self, n: int) -> int:
        MOD = 10**9 + 7

        if n == 1:
            return 3  # "P", "L", "A"

        # dp0: sequences without 'A'
        # dp1: sequences with one 'A'
        # L0: ending with 0 'L's
        # L1: ending with 1 'L'
        # L2: ending with 2 'L's
        dp0L0, dp0L1, dp0L2 = 1, 1, 0
        dp1L0, dp1L1, dp1L2 = 1, 0, 0

        for _ in range(2, n+1):
            new_dp0L0 = (dp0L0 + dp0L1 + dp0L2) % MOD
            new_dp0L1 = dp0L0
            new_dp0L2 = dp0L1

            new_dp1L0 = (dp1L0 + dp1L1 + dp1L2 + dp0L0 + dp0L1 + dp0L2) % MOD
            new_dp1L1 = dp1L0
            new_dp1L2 = dp1L1

            dp0L0, dp0L1, dp0L2 = new_dp0L0, new_dp0L1, new_dp0L2
            dp1L0, dp1L1, dp1L2 = new_dp1L0, new_dp1L1, new_dp1L2

        result = (dp0L0 + dp0L1 + dp0L2 + dp1L0 + dp1L1 + dp1L2) % MOD
        return result


# Test cases
solution = Solution()

print(solution.checkRecord(1))  # Expected: 3
print(solution.checkRecord(2))  # Expected: 8
print(solution.checkRecord(3))  # Expected: 19
print(solution.checkRecord(10))  # Expected: 3536
print(solution.checkRecord(100))  # Expected: 985598218
print(solution.checkRecord(105))  # Expected: 213840824
