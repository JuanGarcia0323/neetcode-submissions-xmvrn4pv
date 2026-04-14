class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {
        let maxProfit = 0
        let L = 0

        for(const [i, value] of prices.entries()){
            const buyValue = prices[L]
            const profit = value - buyValue
            maxProfit = Math.max(maxProfit, profit)
            if(buyValue > value){
                L = i
            }
        }
        return maxProfit
    }
}
