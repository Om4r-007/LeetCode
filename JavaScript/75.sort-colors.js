/*
 * @lc app=leetcode id=75 lang=javascript
 *
 * [75] Sort Colors
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var sortColors = function(nums) {
    for(i=0 ; i < nums.length ; i++){
        for(j=0 ; j < nums.length ; j++){
            if(nums[j] > nums[j+1]){
                let temp = nums[j]
                nums[j] = nums[j+1]
                nums[j+1] = temp
            }
        }
    }
        return nums
};
// @lc code=end

