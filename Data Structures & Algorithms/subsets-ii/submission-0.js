class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    subsetsWithDup(nums) {
        const response = [];
        nums.sort((a,b) => a-b)
        const combinations = (i = 0, combs = [], track = new Set()) => {
            const combinationsKey = combs.join();
            if (!track.has(combinationsKey)) {
                response.push(combs);
                track.add(combinationsKey);
            }
            if (i === nums.length) {
                return;
            }

            const currentValue = nums[i];
            combinations(i + 1, [...combs, currentValue], track);
            combinations(i + 1, [...combs], track);
        };

        combinations();

        return response;
    }
}
