const { keywordDictionary, operatorDictionary, punctuatorDictionary } = require("./Regex")

exports.isKeyword = (token,lineNo) => {
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

exports.isOperator = (token,lineNo) => {
    for (let index = 0; index < operatorDictionary.length; index++) {
        if(operatorDictionary[index].word===token)
        {
            return {
                classPart : operatorDictionary[index].class,
                value : operatorDictionary[index].word,
                lineNo : lineNo
            }
        }  
    }

    return false
}

exports.isPunctuator = (token,lineNo) => {
    for (let index = 0; index < punctuatorDictionary.length; index++) {
        if(punctuatorDictionary[index].word===token)
        {
            return {
                classPart : punctuatorDictionary[index].class,
                value : punctuatorDictionary[index].word,
                lineNo : lineNo
            }
        }  
    }

    return false
}

