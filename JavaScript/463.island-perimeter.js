/*
 * @lc app=leetcode id=463 lang=javascript
 *
 * [463] Island Perimeter
 */

// @lc code=start
/**
 * @param {number[][]} grid
 * @return {number}
 */
var islandPerimeter = function(grid) {
    const m = grid.length;
    if (m === 0) return 0;
    const n = grid[0].length;
    if (n === 0) return 0;
    
    let islands = 0;
    let sharedEdges = 0;
    
    for (let i = 0; i < m; ++i) {
        for (let j = 0; j < n; ++j) {
            if (grid[i][j]) {
                ++islands;
                // count shared edges, note that we only look down and right
                if (i + 1 < m && grid[i + 1][j]) ++sharedEdges;
                if (j + 1 < n && grid[i][j + 1]) ++sharedEdges;
            }
        }
    }
    
    return islands * 4 - sharedEdges * 2;

};
// @lc code=end

