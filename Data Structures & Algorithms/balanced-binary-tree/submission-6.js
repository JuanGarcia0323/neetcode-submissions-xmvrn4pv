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
     * @return {boolean}
     */
    isBalanced(root) {
        let response = true

        const bfs = (node) => {
            if(!node){
                return 0
            }

            const left = bfs(node.left) + 1
            const right = bfs(node.right) + 1

            response = (left === right || (left + 1) === right || left === (right + 1)) && response 

            return Math.max(left, right)
        }

        bfs(root)

        return response
    }
}
