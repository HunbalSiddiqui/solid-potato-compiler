const { keywordDictionary } = require("./Regex")

exports.isKeyword = (token,lineNo) => {
    console.log(token)
    for (let index = 0; index < keywordDictionary.length; index++) {
        if(keywordDictionary[index].word===token)
        {
            return {
                classPart : keywordDictionary[index].class,
                value : keywordDictionary[index].word,
                lineNo : lineNo
            }
        }  
    }

    return false
}
