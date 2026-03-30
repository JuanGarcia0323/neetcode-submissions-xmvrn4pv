class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
        if(!nums.length){
            return 0
        }
        if(nums.length < 2){
            return 1
        }

        let current = 1;
        let greatest = 1;
        
        const sortedNums = nums.sort((a,b) => a-b);
        //[2,3,4,4,5,10,20]
        // nums=[0, 1, 1, 2, 3, 4, 5, 6]
        for(let i = 1; i < sortedNums.length; i++){
            const previousValue = sortedNums[i-1]

            if(sortedNums[i] === previousValue){
                continue
            }

            const separation = sortedNums[i] - previousValue

            if(separation > 1) {
                current = 1
                continue
            }
            
            current += 1
            if(current > greatest){
                greatest = current
            }
        }

        return greatest
    }
}

//sort 