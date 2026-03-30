class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s) {
      const characters = s.split("")
      const closingKey = {
        "]":"[",
        ")":"(",
        "}":"{"
      }
      const openingStack = []
      let isValid = true

      for(const c of characters) {
        const isClosing = closingKey[c]

        if(!isClosing){
            openingStack.push(c)
            continue
        }

        isValid = isClosing === openingStack.pop()

        if(!isValid){
            break
        }
      }

      return isValid && !openingStack.length
    }
}
