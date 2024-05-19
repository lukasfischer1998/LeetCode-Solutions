<?php

/**
 * You are given an array of strings words (0-indexed).
 * 
 * In one operation, pick two distinct indices i and j, where words[i] is a non-empty string, 
 * and move any character from words[i] to any position in words[j].
 * 
 * Return true if you can make every string in words equal using any number of operations, and false otherwise.
 * 
 * Constraints:
 * - 1 <= count($words) <= 100
 * - 1 <= strlen($words[i]) <= 100
 * - $words[i] consists of lowercase English letters.
 */
/*
Example 1:

Input: words = ["abc","aabc","bc"]
Output: true
Explanation: Move the first 'a' in words[1] to the front of words[2],
to make words[1] = "abc" and words[2] = "abc".
All the strings are now equal to "abc", so return true.

Example 2:

Input: words = ["ab","a"]
Output: false
Explanation: It is impossible to make all the strings equal using the operation.
*/


class Solution
{

    /**
     * @param String[] $words
     * @return Boolean
     */
    function makeEqual($words)
    {
        $result = array();
        $totalWords = count($words);

        foreach ($words as $string) {
            $string = str_replace(' ', '', $string);
            $string = strtolower($string);

            foreach (count_chars($string, 1) as $letter => $count) {
                if (!isset($result[chr($letter)])) {
                    $result[chr($letter)] = 0;
                }
                $result[chr($letter)] += $count;
            }
        }

        foreach ($result as $letter => $count) {
            if ($count % $totalWords !== 0) {
                return false;
            }
        }

        return true;
    }
}

// Test cases
$solution = new Solution();

$words1 = ["abc", "aabc", "bc"];
var_dump($solution->makeEqual($words1)); // Expected output: true

$words2 = ["ab", "a"];
var_dump($solution->makeEqual($words2)); // Expected output: false

// Additional test cases
$words3 = ["a", "a", "a", "a"];
var_dump($solution->makeEqual($words3)); // Expected output: true

$words4 = ["abcd", "abc", "a", "ab", "ac"];
var_dump($solution->makeEqual($words4)); // Expected output: false
