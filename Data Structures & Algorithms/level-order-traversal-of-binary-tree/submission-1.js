class Solution {
    /**
     * @param {TreeNode} root
     * @return {number[][]}
     */
    levelOrder(root) {
        if(!root){
            return []
        }

        const queue = new Queue()
        const response = []

        queue.enqueue(root)

        while(!queue.isEmpty()){
            const levelSize = queue.size()
            const level = []

            for(let i = 0; i < levelSize; i++){
                const element = queue.dequeue()
                if(element.left){
                    queue.enqueue(element.left)
                }
                if(element.right){
                    queue.enqueue(element.right)
                }
                level.push(element.val)
            }

            response.push(level)
        }
        return response
    }
}