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
    goodNodes(root, previousValue = root.val, goodValues = 0) {
        if(!root){
            return goodValues
        }
        
        const largerThanPreviousVal = root.val >= previousValue
        const largerPreviousVal = largerThanPreviousVal ? root.val : previousValue

        const left = this.goodNodes(root.left, largerPreviousVal, goodValues)
        const right = this.goodNodes(root.right, largerPreviousVal, goodValues)

        return goodValues + left + right + (largerThanPreviousVal ? 1 : 0)
    }
}
