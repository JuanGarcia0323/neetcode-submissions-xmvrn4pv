class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    subsets(nums) {
    const response = [[]]

    const subSets = (nums, i = 0, combinations=[]) =>{
        if(nums.length === i) {
            return
        }
        const currentValue = nums[i]
        combinations.push(currentValue)
        response.push([...combinations])

        subSets(nums, i+1, [...combinations])
        combinations.pop()
        subSets(nums, i+1, [...combinations])
    }
    
    subSets(nums)

    return response
    }
}
