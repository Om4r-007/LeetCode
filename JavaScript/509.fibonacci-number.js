/*
 * @lc app=leetcode id=509 lang=javascript
 *
 * [509] Fibonacci Number
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */
var fib = function(n) {
    if(n <= 1){
        return n
    }else {
        return fib(n-1) + fib(n-2)
    }
};
// @lc code=end

