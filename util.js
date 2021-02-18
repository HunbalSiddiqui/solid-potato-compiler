const wordBreakers = [' ', ',', '(', ')', '-', ':', ';', '#', '@', '/', '!', '?', '*', '=', '{', '}', '×', '÷', '^', '>', '<', '[', ']', '\\', '\n', '\r']

const dualFuncChar = [',', '(', ')', '-', ':', ';', '#', '@', '!', '?', '*', '=', '{', '}', '×', '÷', '^', '>', '<', '[', ']', '\\']

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

