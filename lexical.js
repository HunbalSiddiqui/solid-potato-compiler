const { tokens } = require("./tokens");
const { wordBreakerFn, validateWordBreaker } = require("./util");

// code for tokenizing
exports.lexer = (input) => {
    // input.split(/[\s,;\n()]+/).map(item=>{
    //     console.log(item)
    // })
    let temp = '' // temp variable
    for (let index = 0; index < input.length; index++) {
        const character = input[index];
        // Check if current character is a word breaker
        // If Yes
        if(wordBreakerFn(character))
        {
            if(temp!=='') // to protect ''(derived because of change in line) from getting pushed.
            {
            tokens.push(temp) // push prev word 
            if(validateWordBreaker(character)) // validate if current char shall be pushed or not
                tokens.push(character)
            }
            temp = '' // empty the temp stack
        }
        // If No
        else
        temp+=character
    }
    if(temp !== '')// to push remaining last character/characters
    {
        tokens.push(temp)
    }
    console.log(tokens)
}