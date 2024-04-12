function majorityElement(nums) {
    nums.sort((a, b) => a - b);
    return nums[Math.floor(nums.length / 2)];
}

// Example usage:
const nums = [3, 3, 4, 2, 4, 4, 2, 4, 4];
console.log(majorityElement(nums)); // Output will be 4
