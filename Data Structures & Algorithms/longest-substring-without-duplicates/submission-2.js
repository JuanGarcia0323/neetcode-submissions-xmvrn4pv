class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstring(s) {
      const charSet = new Set()
      let l = 0
      let res= 0

      for(const val of s.split("")){
        while(charSet.has(val)){
            charSet.delete(s[l])
            l++
        }
        charSet.add(val)
        res = Math.max(res, charSet.size)
      }
      return res
    }
}
