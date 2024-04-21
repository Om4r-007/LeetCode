/*
 * @lc app=leetcode id=1971 lang=javascript
 *
 * [1971] Find if Path Exists in Graph
 */

// @lc code=start
/**
 * @param {number} n
 * @param {number[][]} edges
 * @param {number} source
 * @param {number} destination
 * @return {boolean}
 */
var validPath = function(n, edges, source, destination) {
    const adjList = {};
    for (const [u, v] of edges) {
        if (!adjList[u]) adjList[u] = [];
        if (!adjList[v]) adjList[v] = [];
        adjList[u].push(v);
        adjList[v].push(u);
    }
    
    const dfs = (node, visited) => {
        if (node === destination) return true; // Found destination
        visited[node] = true;
        if (adjList[node]) {
            for (const neighbor of adjList[node]) {
                if (!visited[neighbor]) {
                    if (dfs(neighbor, visited)) return true;
                }
            }
        }
        return false;
    };
    
    const visited = new Array(n).fill(false);
    
    return dfs(source, visited);
};
// @lc code=end

