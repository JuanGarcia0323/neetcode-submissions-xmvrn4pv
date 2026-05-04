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
     * @return {number}
     */
    diameterOfBinaryTree(root) {
        let response = 0

        const bfs = (node) => {
            if(!node){
                return 0
            }
            const left = bfs(node.left)
            const right = bfs(node.right)

            const width = left + right
            
            response = Math.max(response, width)
            return 1 + Math.max(left, right)
        }

        bfs(root)

        return response
    }
}
