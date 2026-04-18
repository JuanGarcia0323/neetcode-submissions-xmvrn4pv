/**
 * Definition for singly-linked list.
 * class ListNode {
 *     constructor(val = 0, next = null) {
 *         this.val = val;
 *         this.next = next;
 *     }
 * }
 */

class Solution {
    /**
     * @param {ListNode} head
     * @return {void}
     */
    reorderList(head) {
        const nodes = []
        let node = head

        while(node){
            nodes.push(node)
            node = node.next
        }


        let i = 0, j = nodes.length - 1
        while(i < j){
            nodes[i].next = nodes[j]
            i++
            if (i === j) break
            nodes[j].next = nodes[i]
            j--
        }
        nodes[i].next = null

        return head
    }
}
