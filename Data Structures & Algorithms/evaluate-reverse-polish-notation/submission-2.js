class Solution {
    /**
     * @param {string[]} tokens
     * @return {number}
     */
    evalRPN(tokens) {
        const numbers = []

        for(const t of tokens){
            const parsed = parseInt(t)
            if(!Number.isNaN(parsed)){
                numbers.push(parsed)
                continue
            }
            const a = numbers.pop()
            const b = numbers.pop()
            if(t === '/'){
                numbers.push(Math.trunc(b / a))
                continue
            }
            numbers.push(eval(`${b} ${t} ${a}`))
        }
        return numbers.pop()
    }
}
