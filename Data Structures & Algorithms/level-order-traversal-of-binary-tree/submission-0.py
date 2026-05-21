# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right

class Solution:
    def levelOrder(self, root: Optional[TreeNode]) -> List[List[int]]:
        queue = deque()
        response = []

        if root:
            queue.append(root)

        while len(queue) > 0:
            level = []
            for i in range(len(queue)):
                element = queue.popleft()
                level.append(element.val)
                if element.left:
                    queue.append(element.left)
                if element.right:
                    queue.append(element.right)

            response.append(level)
        return response
            