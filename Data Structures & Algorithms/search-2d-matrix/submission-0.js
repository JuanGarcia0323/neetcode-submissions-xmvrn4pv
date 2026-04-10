class Solution {
    /**
     * @param {number[][]} matrix
     * @param {number} target
     * @return {boolean}
     */
    searchMatrix(matrix, target) {
        for(const row of matrix){
            const lastElement = row[row.length - 1] 
            if(lastElement === target){
                return true
            }
            if(lastElement > target){
                let L = 0
                let R = row.length - 1

                while(L <= R){
                    const M = L + Math.floor((R - L) / 2)
                    const currentValue = row[M]
                    if(currentValue > target){
                        R = M - 1
                        continue
                    }
                    if(currentValue < target){
                        L = M + 1
                        continue
                    }
                    return true
                }
            }
        }
        return false
    }
}
