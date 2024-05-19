<?php

/**
 * There exists an undirected tree with n nodes numbered 0 to n - 1. You are given a 0-indexed 2D integer array edges of length n - 1,
 * where edges[i] = [ui, vi] indicates that there is an edge between nodes ui and vi in the tree. You are also given a positive integer k,
 * and a 0-indexed array of non-negative integers nums of length n, where nums[i] represents the value of the node numbered i.
 *
 * Alice wants the sum of values of tree nodes to be maximum, for which Alice can perform the following operation any number of times
 * (including zero) on the tree:
 *
 * Choose any edge [u, v] connecting the nodes u and v, and update their values as follows:
 * nums[u] = nums[u] XOR k
 * nums[v] = nums[v] XOR k
 *
 * Return the maximum possible sum of the values Alice can achieve by performing the operation any number of times.
 *
 * Example 1:
 *
 * Input: nums = [1,2,1], k = 3, edges = [[0,1],[0,2]]
 * Output: 6
 * Explanation: Alice can achieve the maximum sum of 6 using a single operation:
 * - Choose the edge [0,2]. nums[0] and nums[2] become: 1 XOR 3 = 2, and the array nums becomes: [1,2,1] -> [2,2,2].
 * The total sum of values is 2 + 2 + 2 = 6.
 * It can be shown that 6 is the maximum achievable sum of values.
 *
 * Example 2:
 *
 * Input: nums = [2,3], k = 7, edges = [[0,1]]
 * Output: 9
 * Explanation: Alice can achieve the maximum sum of 9 using a single operation:
 * - Choose the edge [0,1]. nums[0] becomes: 2 XOR 7 = 5 and nums[1] become: 3 XOR 7 = 4, and the array nums becomes: [2,3] -> [5,4].
 * The total sum of values is 5 + 4 = 9.
 * It can be shown that 9 is the maximum achievable sum of values.
 *
 * Example 3:
 *
 * Input: nums = [7,7,7,7,7,7], k = 3, edges = [[0,1],[0,2],[0,3],[0,4],[0,5]]
 * Output: 42
 * Explanation: The maximum achievable sum is 42 which can be achieved by Alice performing no operations.
 *
 * Constraints:
 *
 * 2 <= n == nums.length <= 2 * 10^4
 * 1 <= k <= 10^9
 * 0 <= nums[i] <= 10^9
 * edges.length == n - 1
 * edges[i].length == 2
 * 0 <= edges[i][0], edges[i][1] <= n - 1
 * The input is generated such that edges represent a valid tree.
 */
class Solution
{
    public function maximumValueSum($values, $k, $edges)
    {
        $n = count($values);
        $adjacencyList = array_fill(0, $n, []);

        foreach ($edges as $edge) {
            $adjacencyList[$edge[0]][] = $edge[1];
            $adjacencyList[$edge[1]][] = $edge[0];
        }

        $nodesWithIncreasedValue = [];
        for ($i = 0; $i < $n; $i++) {
            $newValue = $values[$i] ^ $k;
            if ($newValue > $values[$i]) {
                $nodesWithIncreasedValue[] = $i;
            }
        }

        $increasedNodesCount = count($nodesWithIncreasedValue);

        if ($increasedNodesCount % 2 == 0) {
            $totalSum = array_sum($values);
            foreach ($nodesWithIncreasedValue as $node) {
                $totalSum -= $values[$node];
                $newValue = $values[$node] ^ $k;
                $totalSum += $newValue;
            }
            return $totalSum;
        } else {
            $totalSum = array_sum($values);
            $finalTotalSum = $totalSum;

            foreach ($nodesWithIncreasedValue as $node) {
                $totalSum -= $values[$node];
                $newValue = $values[$node] ^ $k;
                $totalSum += $newValue;
            }

            foreach ($nodesWithIncreasedValue as $node) {
                $newValue = $values[$node] ^ $k;
                $currentTotalSum = $totalSum - $newValue + $values[$node];
                $finalTotalSum = max($finalTotalSum, $currentTotalSum);
            }

            $visitedNodes = array_fill(0, $n, 0);
            foreach ($nodesWithIncreasedValue as $node) {
                $visitedNodes[$node] = 1;
            }

            for ($i = 0; $i < $n; $i++) {
                if ($visitedNodes[$i] == 0) {
                    $newValue = $values[$i] ^ $k;
                    $currentTotalSum = $totalSum - $values[$i] + $newValue;
                    $finalTotalSum = max($finalTotalSum, $currentTotalSum);
                }
            }
            return $finalTotalSum;
        }
    }
}


// Test case 1
$nums1 = [1, 2, 1];
$k1 = 3;
$edges1 = [[0, 1], [0, 2]];
echo (new Solution())->maximumValueSum($nums1, $k1, $edges1) . "\n"; // Expected output: 6

// Test case 2
$nums2 = [2, 3];
$k2 = 7;
$edges2 = [[0, 1]];
echo (new Solution())->maximumValueSum($nums2, $k2, $edges2) . "\n"; // Expected output: 9

// Test case 3
$nums3 = [7, 7, 7, 7, 7, 7];
$k3 = 3;
$edges3 = [[0, 1], [0, 2], [0, 3], [0, 4], [0, 5]];
echo (new Solution())->maximumValueSum($nums3, $k3, $edges3) . "\n"; // Expected output: 42
