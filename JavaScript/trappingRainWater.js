function trap(height) {
    if (height == null || height.length === 0) {
        return 0;
    }
    
    let left = 0,
        right = height.length - 1,
        leftMax = 0,
        rightMax = 0,
        water = 0;
    
    while (left < right) {
        if (height[left] < height[right]) {
            if (height[left] >= leftMax) {
                leftMax = height[left];
            } else {
                water += leftMax - height[left];
            }
            left++;
        } else {
            if (height[right] >= rightMax) {
                rightMax = height[right];
            } else {
                water += rightMax - height[right];
            }
            right--;
        }
    }
    
    return water;
}

// Example usage:
const elevationMap = [0,1,0,2,1,0,1,3,2,1,2,1];
console.log(trap(elevationMap)); // Output: 6
