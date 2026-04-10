class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number}
     */
    search(nums, target) {
        let L = 0
        let R = nums.length - 1
        let result = -1
        let lastM = -1

        if(!nums.length){
            return -1
        }
        if(nums[0] === target){
            return 0
        }
        if(nums[1] === target){
            return 1
        }

        while(L <= R){
            const M = Math.ceil((R+L)/2) 
            const currentValue = nums[M]

            if(lastM === M){
                break
            }
            lastM = M
            if(currentValue > target){
                R = M
            }
            if(currentValue < target){
                L = M
            }
            if(currentValue === target){
                result = M
                break
            }
        }
        return result
    }
}
