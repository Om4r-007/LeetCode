/*
 * @lc app=leetcode id=623 lang=javascript
 *
 * [623] Add One Row to Tree
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
 * @param {number} val
 * @param {number} depth
 * @return {TreeNode}
 */
var addOneRow = function(root, val, depth) {
    function TreeNode(val) {
        this.val = val;
        this.left = this.right = null;
    }
    
    // If depth is 1, create a new root and attach the original tree as its left subtree
    if (depth === 1) {
        const newRoot = new TreeNode(val);
        newRoot.left = root;
        return newRoot;
    }
    
    // Recursive function to traverse the tree and add a row at the specified depth
    const traverse = function(node, currentDepth) {
        if (!node) return;
        
        if (currentDepth === depth - 1) {
            const leftChild = new TreeNode(val);
            const rightChild = new TreeNode(val);
            
            leftChild.left = node.left;
            rightChild.right = node.right;
            
            node.left = leftChild;
            node.right = rightChild;
        } else {
            traverse(node.left, currentDepth + 1);
            traverse(node.right, currentDepth + 1);
        }
    };
    
    traverse(root, 1);
    return root;
};
// @lc code=end

