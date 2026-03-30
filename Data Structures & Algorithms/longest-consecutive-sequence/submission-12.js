class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
        const numbers = new Set(nums)

        const findNext = (n, counter, numbers, visited) => {
            visited.add(n)
            if(!numbers.has(n+1)){
                return counter
            }
            return findNext(n+1, counter+1, numbers, visited)
        }

        let greatest = 0

        const visited = new Set()

        for(const k of numbers){
            if(visited.has(k)){
                continue
            }

            const consecutives = findNext(k, 1, numbers, visited)

            if(consecutives > greatest){
                greatest = consecutives
            }
        }
        
        return greatest
    }
}