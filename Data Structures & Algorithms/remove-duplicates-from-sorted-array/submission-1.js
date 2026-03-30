class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    removeDuplicates(nums) {
        const validations = []
        for(let i = 0; i <= nums.length; i++){
            const value = nums[i]
            const repeated = validations.some(v => v === value) 
            if(!repeated){
                validations.push(value)
                continue
            }

            nums.splice(i, 1)
            --i
        }
        return validations.length
    }
}
