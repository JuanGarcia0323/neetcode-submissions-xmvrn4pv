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
     * @param {number} n
     * @return {ListNode}
     */
    removeNthFromEnd(head, n) {
        let slow = head
        let fast = head
        let fastIndex = 1
        let length = 0
        let previous = head
        
        while(fast){
            ++length
            if(fastIndex !== n){
                fast = fast.next
                ++fastIndex
                continue
            }
            if(!fast.next){
                previous.next = slow.next
                break
            }
            previous = slow
            slow = slow.next
            fast = fast.next
        }

        if(length === n){
            return head.next
        }

        if(!fast && length > n){
            previous.next = slow.next
        }

        return head
    }
}
