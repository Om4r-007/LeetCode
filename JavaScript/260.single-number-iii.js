/*
 * @lc app=leetcode id=260 lang=javascript
 *
 * [260] Single Number III
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var singleNumber = function(nums) {
    const countMap = new Map();
    
    // Step 1: Count the occurrences of each element
    for (let num of nums) {
        countMap.set(num, (countMap.get(num) || 0) + 1);
    }
    
    // Step 2: Find the elements that appear exactly once
    const result = [];
    for (let [num, count] of countMap) {
        if (count === 1) {
            result.push(num);
        }
    }
    
    return result
};
// @lc code=end

