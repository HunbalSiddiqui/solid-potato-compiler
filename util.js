// const wordBreakers = [' ', ',', '(', ')', '-', ':', ';', '#', '@', '/', '!', '?', '*', '=', '{', '}', '×', '÷', '^', '>', '<', '[', ']', '\\', '\n', '\r']
const wordBreakers = [' ', '[', ']', '(', ')', '+', '-', '/', '*', '%', '{', '}', '!', ',', '=', ':', '#', '@', '&', '-', '"', '^', '`', '|', '>', '<', '\\', '\n', '\r']

const dualFuncChar = ['[', ']', '(', ')', '+', '-', '/', '*', '%', '{', '}', '!', ',', '=', ':', '#', '@', '&', '-', '^', '`', '|', '>', '<','\\']
// const dualFuncChar = [',', '(', ')', '-', ':', ';', '#', '@', '!', '?', '*', '=', '{', '}', '×', '÷', '^', '>', '<', '[', ']', '\\']

const augmentedTokenChar = ['++','==','--','+=','>=','<=','!=']

exports.operatorChar = ['+','-','=','>','<','!']
// Validate WordBreakers
exports.wordBreakerFn = (character) =>{
    if(wordBreakers.includes(character))
    return true
    else
    return false
}

// Validate if current wordbreaker shall be pushed as token 
exports.validateWordBreaker = (breaker) => {
    if(dualFuncChar.includes(breaker))
    return true
    else
    return false
}

// Validate if current operator is augmented or not 
exports.validateAugmentedOperator = (currentOperators) => {
    if(augmentedTokenChar.includes(currentOperators))
    {
        return true
    }
    else {
        return false
    }
}