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
    
    // _iteration(word, onFind, fallBack) {
    //     let curr = this.root
    //     for(const w of word){
    //         if(!curr.children.has(w)){
    //             fallBack?.(w)
    //         }
    //         onFind?.(w)
    //     }
    //     return curr
    // }

    /**
     * @param {string} word
     * @return {void}
     */
    insert(word) {
        let curr = this.root
        for(const c of word){
            if(!curr.children.has(c)){
                curr.children.set(c, new TrieNode())
            }
            curr = curr.children.get(c)
        }
        curr.isWord = true
    }

    /**
     * @param {string} word
     * @return {boolean}
     */
    search(word) {
        let curr = this.root
        for(const c of word){
            if(!curr.children.has(c)){
                return false
            }
            curr = curr.children.get(c)
        }
        return !!curr.isWord
    }

    /**
     * @param {string} prefix
     * @return {boolean}
     */
    startsWith(prefix) {
        let curr = this.root
        for(const w of prefix){
            if(!curr.children.has(w)){
                return false
            }
            curr = curr.children.get(w)
        }
        return true
    }
}
