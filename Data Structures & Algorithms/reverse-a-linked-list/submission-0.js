/**
 * Definition for singly-linked list.
 * class ListNode {
 *     constructor(val = 0, next = null) {
 *         this.val = val;
 *         this.next = next;
 *     }
 * }
 */

// 1,2,3,4,5
// 2,1
// currentValue = 1
// nextValue = 2
// node = 1
// 

class Solution {
    /**
     * @param {ListNode} head
     * @return {ListNode}
     */
    reverseList(head) {
        const invertLinkedList  = (previous, node) => {
            if(!node){
                return node
            }
            const next = node.next
            node.next = previous
            if(!next) {
                return node
            }
            return invertLinkedList(node, next)
        }
        return invertLinkedList(null, head)
    }
}