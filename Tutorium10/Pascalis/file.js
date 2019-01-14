const getCharacterCount = (text) => {
    return text ?
        text.match(/./g).length : 0
}

console.log("getCharacterCount", getCharacterCount("Hi 123 _ 10€ 3.33"))

const getWords = (text) => {
    const pattern = /((\w|€)+)/g
    const words = text ? text.match(pattern) : []
    return words
}

console.log("getWords", getWords("Hi 123 _ 10€ 3.33"))

//this is wrong and my hands are bleeding from writing this bullshit, I always thought I was better than this, 
//but the stupid array return taught me better.
const getLongestWords = (text) => {
    let longestWords = []
    const array = getWords(text)
    let maxLength = 0
    for (let index = 0; index < array.length; index++) {
        const element = array[index];
        if (getCharacterCount(element) >= maxLength) {
            longestWords.push(element)
            maxLength = getCharacterCount(element)
        }
    }
    for (let index = 0; index < array.length; index++) {
        const element = array[index];
        if (getCharacterCount(element) <= maxLength) {
            delete array[index]
        }
    }
    for (let index = array.length; index > 0; index--) {
        const element = array[index];
        if (getCharacterCount(element) <= maxLength) {
            delete array[index]
        }
    }
    return longestWords
}

console.log("getLongestWords", getLongestWords("Hi 123 _ 10€ 3.33"))