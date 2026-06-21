class TrieNode {
    constructor(){
        this.children = new Map()
        this.isWord = false
    }
}

class WordDictionary {
    constructor() {
        this.root = new TrieNode()
    }

    /**
     * @param {string} word
     * @return {void}
     */
    addWord(word) {
        let curr = this.root
        for(const w of word){
            if(!curr.children.has(w)){
                curr.children.set(w, new TrieNode())
            }
            curr = curr.children.get(w)
        }
        curr.isWord = true
    }

    /**
     * @param {string} word
     * @return {boolean}
     */
    search(word) {
        const recursiveSearch = (node, i=0) => {
            if(i === word.length){
                return node.isWord
            }

            const currentLetter = word[i]

            if(currentLetter === '.'){
                const keys = [...node.children.keys()]
                return keys.map((k) => recursiveSearch(node.children.get(k), i+1)).some((t) => t)
            }

            if(!node.children.has(currentLetter)){
                return false
            }

            return recursiveSearch(node.children.get(currentLetter), i+1)
        }
        return recursiveSearch(this.root)
    }
}

// .ay -> d -> a -> y

const recursiveSearch = (node, i=0, word = '.ay') => {
    if(i === word.length){
        return node.isWord
    }

    const currentLetter = word[i]

    if(currentLetter === '.'){
        const keys = [...node.keys()]
        return keys.map((k) => recursiveSearch(node, i, `${k}${word.substring(i+1)}`)).some((t) => t)
    }

    if(!node.has(currentLetter)){
        return false
    }
    
    return recursiveSearch(node.get(currentLetter), i+1, word)
}