class Solution {
    /**
     * @param {number[]} nums
     * @param {number} val
     * @return {number}
     */
    removeElement(nums, val) {
        for(let i = 0; i <= nums.length; i++){
            const value = nums[i]
            if(value === val){
                nums.splice(i, 1)
                --i
            }
        }
        return nums.length
    }
}
