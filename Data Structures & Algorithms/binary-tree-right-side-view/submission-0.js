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
     * @return {number[]}
     */
    rightSideView(node, stack = [], i=0) {
        if(!node){
            return stack
        }   
    
        if(!stack[i]){
            stack.push(node.val)
        }
    
    
        const rightStack = this.rightSideView(node.right, stack, i+1) // [1,3]
        this.rightSideView(node.left, rightStack, i+1) // [4,5,6,7,8,9]
    
        return stack
    }
}
