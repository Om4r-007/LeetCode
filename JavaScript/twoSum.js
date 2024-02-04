/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
    var output = [];
    for (let i = 0; i < nums.length; i++) {
        for (let j = i + 1; j < nums.length; j++) {
            var sum = nums[i] + nums[j];
            if (sum === target) {
                output.push(i);
                output.push(j);
                return output;
            }
        }
    }
    return output;
};