class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        const values = {}

        for (const word of strs) {
            const anagram = word.split("").sort().join("")

            if (!values[anagram]) {
                values[anagram] = [word]
                continue
            }

            values[anagram].push(word)
        }

        return Object.values(values)
    }
}