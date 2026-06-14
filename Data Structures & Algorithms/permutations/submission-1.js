class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    permute(nums) {
        const permutations = () => {
            if (nums.length === 1) {
                return [nums];
            }
            const currentValue = nums.pop();
            const lastCombinations = permutations();
            const response = [];
            for (const combArr of lastCombinations) {
                for (let i = 0; i <= combArr.length; i++) {
                    const combCopy = [...combArr];
                    combCopy.splice(i, 0, currentValue);
                    response.push(combCopy);
                }
            }
            return response;
        };
        return permutations()
    }
}
