/*
 * @lc app=leetcode id=988 lang=javascript
 *
 * [988] Smallest String Starting From Leaf
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {string}
 */
var smallestFromLeaf = function(root) {
    const charFromValue = (value) => String.fromCharCode(value + 97);
    function Node(val) {
    this.val = val;
    this.left = this.right = null;
    }

    const dfs = (node, path) => {
        if (!node) return;
        path = charFromValue(node.val) + path;
        if (!node.left && !node.right) {
            paths.push(path);
            return;
        }
        dfs(node.left, path);
        dfs(node.right, path);
    };

    const paths = [];
    dfs(root, '');

    return paths.sort()[0];

};
// @lc code=end

