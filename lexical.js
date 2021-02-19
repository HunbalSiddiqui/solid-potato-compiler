const {
    tokens
} = require("./tokens");
const {
    wordBreakerFn,
    validateWordBreaker,
    operatorChar,
    validateAugmentedOperator
} = require("./util");

// code for tokenizing
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
    }

    var filteredToken = tokens.filter(token => token !== '')
    console.log(filteredToken,filteredToken.length)
}