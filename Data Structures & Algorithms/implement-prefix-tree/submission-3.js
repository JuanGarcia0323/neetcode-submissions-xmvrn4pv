class TrieNode {
    constructor() {
        this.children = new Map()
        this.isWord = false
    }
}

class PrefixTree {
    constructor() {
        this.root = new TrieNode()
    }
    
    _iteration(word, fallBack, onFind) {
        let curr = this.root
        for(const w of word){
            if(!curr) {
                return false
            }
            if(!curr.children.has(w)){
                fallBack?.(w, curr)
            }
            onFind?.(w, curr)
            curr = curr.children.get(w)
        }
        return curr
    }

    /**
     * @param {string} word
     * @return {void}
     */
    insert(word) {
        const setChildren = (letter, currentNode) => {
            currentNode.children.set(letter, new TrieNode())
        }
        const lastLetter = this._iteration(word, setChildren)
        lastLetter.isWord = true
    }

    /**
     * @param {string} word
     * @return {boolean}
     */
    search(word) {
        const lastLetter = this._iteration(word)
        return !!lastLetter && lastLetter.isWord
    }

    /**
     * @param {string} prefix
     * @return {boolean}
     */
    startsWith(prefix) {
        const lastLetter = this._iteration(prefix)

        return !!lastLetter
    }
}
