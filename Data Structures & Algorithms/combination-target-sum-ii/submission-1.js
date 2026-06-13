class Solution {
    /**
     * @param {number[]} candidates
     * @param {number} target
     * @return {number[][]}
     */
    combinationSum2(candidates, target) {
        const nums = candidates
        nums.sort((a, b) => a - b)
        const response = []

        const sum = (values) => values.length && values.reduce((a,b) => a+b)

        const findCombinations = (i=0, combinations=[]) => {
            const currentSum = sum(combinations)
            if(currentSum === target){
                response.push(combinations)
                return
            }
            if(i === nums.length || currentSum > target){
                return
            }

            const currentValue = nums[i]

            findCombinations(i+1, [...combinations, currentValue])
            while(nums[i+1] === currentValue){
                i++
            }
            findCombinations(i+1, [...combinations])
        }

        findCombinations()

        return response
    }
}
