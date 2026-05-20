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
     * @param {TreeNode} p
     * @param {TreeNode} q
     * @return {TreeNode}
     */
    lowestCommonAncestor(root, p, q) {
        const trackP = new Map(), trackQ = new Map()

        this.dfs(root, p.val, trackP)
        this.dfs(root, q.val, trackQ)

        const trackQArray = [...trackQ.keys()].reverse()

        for(const valQ of trackQArray){
            if(trackP.has(valQ)) return trackP.get(valQ)
        }

        return null
    }

    dfs(root, target, path) {
        if(!root){
            return false
        }

        path.set(root.val, root)

        if(root.val === target){
            return true
        }
        
        const left = this.dfs(root.left, target, path)

        if(left){
            return true
        }

        const right = this.dfs(root.right, target, path)

        if(right){
            return true
        }

        path.delete(root.val)
        return false
    }
}