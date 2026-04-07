class Solution {
    /**
     * @param {number[]} numbers
     * @param {number} target
     * @return {number[]}
     */
    twoSum(numbers, target) {
        let L = 0
        let R = numbers.length - 1

        while(L < R) {
            const result = numbers[L] + numbers[R]

            if(result > target){
                R -= 1
                continue
            }

            if(result < target){
                L += 1
                continue
            }

            return [L+1,R+1]
        }
    }
}
