/*
 * @lc app=leetcode id=1523 lang=javascript
 *
 * [1523] Count Odd Numbers in an Interval Range
 */

// @lc code=start
/**
 * @param {number} low
 * @param {number} high
 * @return {number}
 */
var countOdds = function(low, high) {
    let count = 0
    for (let i = low ; i<=high ; i++){
        if(i % 2 !== 0){
            count++
        }
    }
    return count
};
// @lc code=end