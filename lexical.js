const {
    tokens
} = require("./tokens");
const {
    wordBreakerFn,
    validateWordBreaker,
    operatorChar,
    validateAugmentedOperator
} = require("./util");
const {integerRegex, doubleRegex, identifierRegex, stringRegex} = require('./Regex');
const { isKeyword, isOperator, isPunctuator } = require("./RegexUtil");
// code for word breaking
exports.lexer = (input) => {
    // input.split(/[\s,;\n()]+/).map(item=>{
    //     console.log(item)
    // })
    let temp = '' // temp variable
    for (let index = 0; index < input.length; index++) {
        // Check if current character is a word breaker
        // If Yes
        if (wordBreakerFn(input[index])) {
            tokens.push(temp) // push prev word 
            temp = ''
            // check if current and preceeding characters is farw slash i.e /
            if('/'===input[index]&&'/'===input[index+1] )
            {
                // Single line Comment should occur
                let localIndex=index
                while(input[localIndex]!=='\n')
                {
                    // Line change will occur
                    localIndex++;
                }
                //Line change occured
                index = localIndex // update index value
            }
            // check if current character is / and preceeding is *, than multiline comments should occur
            if('/'===input[index]&&'*'===input[index+1])
            {
                // Multiline line Comment should occur
                let localIndex=index+2
                while(input[localIndex]!=='*'&&input[localIndex+1]!=='/')
                {
                    // code will keep on running
                    localIndex++;
                }
                // multiline comments finish
                index = localIndex+2 // update index value
            }
            // check if current character is " than find next ", than push it in the tokens arr as single token
            if('"'===input[index])
            {
                temp+=input[index] // set " in temp
                let localIndex = index+1 // incrementing the local index
                    while(input[localIndex]!=='"') // run loop till next " is found 
                    {
                        temp+=input[localIndex] // add in temp
                        localIndex++
                        if(localIndex===input.length-1) // if next " is not found than terminate the program when last character is read.
                        break;
                    }
                temp+= input[localIndex] // pushing last " in temp
                tokens.push(temp)
                index=localIndex
                temp = ''
            }
            // check if current character is operator i.e + = ! etc
            // If yes
            if (operatorChar.includes(input[index])) {
                temp = '' // empty the temp stack
                var localTemp = input[index]; // add current oprator i.e =, +  etc to the localTemp to pass as param
                localTemp += input[index + 1] // add the preceeding operator in the localTemp
                // Validate if the current compound localTemp is augmented or not
                // If yes i.e augmented, than push the compound operator as single token and increment the value of index
                if (validateAugmentedOperator(localTemp)) {
                    temp += input[index] // add current op
                    temp += input[index + 1] // add preceeding op
                    index = index + 1 // increment the value of index
                    tokens.push(temp) // push in tokens arr.
                }
                // If not augmented, than push the single character to tokens arr.
                else if (validateWordBreaker(input[index])) // validate if current char shall be pushed or not{
                {
                    tokens.push(input[index])
                }
            }
            // If not operator, may be ( , ' ) [ etc
            else if (validateWordBreaker(input[index])) // validate if current char shall be pushed or not{
                {
                    tokens.push(input[index])
                }
            temp = '' // empty the temp stack
        }
        // If No
        else
            temp += input[index]
    }
    if (temp !== '') // to push remaining last character/characters
    {
        tokens.push(temp)
        temp = ''
    }

    var filteredToken = tokens.filter(token => token !== '')
    // console.log(filteredToken,filteredToken.length)
    tokenization(filteredToken)
}

// Code for tokenization
const tokensObjArr = []
const tokenization = (tokensArr) => {
    tokensArr.forEach(token => {
        if(!isNaN(token))
        {
            if(integerRegex.test(token))
                tokensObjArr.push({classPart:"Integer",value:token,LineNo:0})
            if(doubleRegex.test(token))
                tokensObjArr.push({classPart:"Double",value:token,LineNo:0})
        } 
        else {
            if(isKeyword(token,0))
                tokensObjArr.push(isKeyword(token,0))
            if(identifierRegex.test(token)&&!isKeyword(token,0))
                tokensObjArr.push({classPart:"Identifier",value:token,LineNo:0})
            if(isOperator(token,0))
                tokensObjArr.push(isOperator(token,0))
            if(isPunctuator(token,0))
                tokensObjArr.push(isPunctuator(token,0))
            if(stringRegex.test(token)&&!identifierRegex.test(token)&&!isKeyword(token,0))
                tokensObjArr.push({classPart:"String",value:token,LineNo:0})
        }
    }); 
    console.log(tokensObjArr)
}