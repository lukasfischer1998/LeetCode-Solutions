'''
1054. Distant Barcodes
Medium

In a warehouse, there is a row of barcodes, where the ith barcode is barcodes[i].
Rearrange the barcodes so that no two adjacent barcodes 
are equal. You may return any answer, and it is guaranteed an answer exists.

Example 1:
Input: barcodes = [1,1,1,2,2,2]
Output: [2,1,2,1,2,1]

Example 2:
Input: barcodes = [1,1,1,1,2,2,3,3]
Output: [1,3,1,3,1,2,1,2]
 
Constraints:

1 <= barcodes.length <= 10000
1 <= barcodes[i] <= 10000
'''


from typing import List


class Solution:
    def rearrangeBarcodes(self, barcodes: List[int]) -> List[int]:
        freq = {}
        for barcode in barcodes:
            if barcode in freq:
                freq[barcode] += 1
            else:
                freq[barcode] = 1

        sorted_freq = []
        for barcode, count in freq.items():
            sorted_freq.append((count, barcode))

        for i in range(len(sorted_freq)):
            for j in range(i + 1, len(sorted_freq)):
                if sorted_freq[i][0] < sorted_freq[j][0]:
                    sorted_freq[i], sorted_freq[j] = sorted_freq[j], sorted_freq[i]

        sorted_barcodes = []
        for count, barcode in sorted_freq:
            for _ in range(count):
                sorted_barcodes.append(barcode)

        res = [0] * len(barcodes)
        idx = 0

        # Zuerst die geraden Indexpositionen füllen
        for barcode in sorted_barcodes:
            res[idx] = barcode
            idx += 2
            if idx >= len(barcodes):
                idx = 1

        return res


# Output: [2,1,2,1,2,1]
print(Solution().rearrangeBarcodes([1, 1, 1, 2, 2, 2]))
# Output: [1,3,1,3,1,2,1,2]
print(Solution().rearrangeBarcodes([1, 1, 1, 1, 2, 2, 3, 3]))
