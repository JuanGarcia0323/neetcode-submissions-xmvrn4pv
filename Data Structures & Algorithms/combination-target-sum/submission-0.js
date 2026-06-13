class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @returns {number[][]}
     */
    combinationSum(nums, target) {
        const response = []
        const sum = (numbers) => numbers.length && numbers.reduce((a,b) => a+b) 

        const addCombinations = (i=0, combinations=[]) => {
            const combinationsResult = sum(combinations)
            if(i === nums.length || combinationsResult > target){
                return
            } 
            const currentValue = nums[i]
            if(combinationsResult === target){
                response.push(combinations)
                return
            }
        
            addCombinations(i, [...combinations, currentValue])
            addCombinations(i+1, [...combinations])
        }
        addCombinations()
        return response
    }
}
