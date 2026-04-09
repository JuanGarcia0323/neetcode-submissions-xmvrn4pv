class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    threeSum(nums) {
        nums.sort((a, b) => a - b);
        const res = [];

        for(const [i, a] of nums.entries()){
            if(a > 0) break
            if(i > 0 && a === nums[i-1]) continue

            let L = i + 1
            let R = nums.length - 1

            while(L < R){
                const sum = a + nums[L] + nums[R]
                if(sum > 0){
                    R--
                    continue
                }
                if(sum < 0){
                    L++ 
                    continue
                }
                res.push([a, nums[L], nums[R]])
                L++
                R--
                while(L < R && nums[L] === nums[L - 1]){
                    L++
                }
            }
        }

        return res;
    }
}