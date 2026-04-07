class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {
        const text = s.toLowerCase().replaceAll(/[^a-z0-9]/gi, "").split("")

        for(const l of text){
            const rightLetter = text.pop()
            if(l !== rightLetter){
                return false
            }
        }

        return true
    }
}
