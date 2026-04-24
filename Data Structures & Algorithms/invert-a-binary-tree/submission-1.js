/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     constructor(val = 0, left = null, right = null) {
 *         this.val = val;
 *         this.left = left;
 *         this.right = right;
 *     }
 * }
 */

class Solution {
    /**
     * @param {TreeNode} root
     * @return {TreeNode}
     */
    invertTree(root) {
        if(!root){
            return root
        }

        const invertTree = (node) => {
            if(!node.left && !node.right){
                return node
            }

            const left = node.left ? invertTree(node.left) : null
            const right = node.right ? invertTree(node.right) : null
            
            node.right = left
            node.left = right

            return node
        }
        return invertTree(root)
    }
}
