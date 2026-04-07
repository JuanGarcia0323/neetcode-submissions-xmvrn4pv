class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {
        const text = s.toLowerCase().replaceAll(/[^a-z0-9]/gi, "").split("")
        let R = text.length - 1

        for(const l of text){
            const rightLetter = text[R]
            if(l !== rightLetter){
                return false
            }
            R -= 1
        }

        return true
    }
}
