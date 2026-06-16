class Solution {
    /**
     * @param {number} n
     * @return {string[]}
     */
    generateParenthesis(n) {
        const response = []
        const parenthesis = n

        const combinations = (open=0, close=0, previous=[]) => {
            if(previous.length/2 === parenthesis){
                response.push(previous.join(""))
                return
            }

            if(open < parenthesis){
                combinations(open+1, close+1, [...previous, "("])
            }
            if(close){
                combinations(open, close-1, [...previous, ")"])
            }
        } 

        combinations()
        return response
    }
}
