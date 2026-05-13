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
     * @param {TreeNode} p
     * @param {TreeNode} q
     * @return {boolean}
     */
    isSameTree(p, q) {
        const plainTreeOne = []
        const plainTreeTwo = []

        const bfs = (node, plainTree) => {
            plainTree.push(node?.val)
            if(!node){
                return
            }
            bfs(node.left, plainTree)
            bfs(node.right, plainTree)
        }

        bfs(p, plainTreeOne)
        bfs(q, plainTreeTwo)

        const oneLength = plainTreeOne.length
        const twoLength = plainTreeTwo.length

        // const maxLength = Math.max(oneLength, twoLength)

        if(plainTreeOne.length !== plainTreeTwo.length){
            return false
        }

        // for(let i = 0; i < maxLength; i++){
        //     if(plainTreeOne[i] !== plainTreeTwo[i]){
        //         return false
        //     }
        // }
        
        return !(plainTreeOne.some((val, i) => plainTreeTwo[i] !== val))
    }
}
