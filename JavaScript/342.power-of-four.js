/*
 * @lc app=leetcode id=342 lang=javascript
 *
 * [342] Power of Four
 */

// @lc code=start
/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfFour = function(n) {
    if(n <= 0){
        return false
    }
    if(n === 1){
        return true
    }
    if(n % 4!== 0){
        return false
    }
    return isPowerOfFour(n/4)
    
};
// @lc code=end

