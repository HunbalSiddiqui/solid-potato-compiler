let INDEX = 0
let GlobalTokensObjArr = {}
exports.syntaxFn = (tokensObjArr) => {
    GlobalTokensObjArr = tokensObjArr
    GlobalTokensObjArr.forEach(tokenObj => {
        console.log(tokenObj)
    });
    // this.BODY()
    if (this.BODY()) {
        console.log("No error")
    }
}
// Body 
exports.BODY = () => {
    // console.log(GlobalTokensObjArr[INDEX].classPart === '\n')
    if (GlobalTokensObjArr[INDEX].classPart === 'EndMarker' ||GlobalTokensObjArr[INDEX].classPart === '\n')
        return true
    else if (this.MST()) {
        return true
    } else {
        console.log("Error in object", GlobalTokensObjArr[INDEX])
        return false
    }
}
// Multiline statement
exports.MST = () => {
    if (this.SST())
    {
        if(this.MST())
        {
            return true
        }
    }
    else if (GlobalTokensObjArr[INDEX].classPart === 'return' ||
        GlobalTokensObjArr[INDEX].classPart === 'break' ||
        GlobalTokensObjArr[INDEX].classPart === 'else' ||
        GlobalTokensObjArr[INDEX].classPart === 'EndMarker'||
        GlobalTokensObjArr[INDEX].classPart === 'Identifier'||
        GlobalTokensObjArr[INDEX].classPart === 'if'||
        GlobalTokensObjArr[INDEX].classPart === 'for'||
        GlobalTokensObjArr[INDEX].classPart === 'DataType'||
        GlobalTokensObjArr[INDEX].classPart === '}') {
        INDEX++;
        return true
    } else {
        return false
    }
}
// Singleline statement
exports.SST = () => {
    if (this.IF_OELSE() || this.FN_ST() || this.WHILE_ST() || this.FOR_ST() || this.DEC() || this.ASSIGN_ST())
        return true
    return false
}

exports.IF_OELSE = () => {
    if (GlobalTokensObjArr[INDEX].classPart === '\n') {
        INDEX++;
        return true
    } else if (GlobalTokensObjArr[INDEX].classPart === 'if') {
        INDEX++;
        if (GlobalTokensObjArr[INDEX].classPart === '(') {
            INDEX++
            if (this.COND()) {
                if (this.ROP()) {
                    if (this.COND()) {
                        if (GlobalTokensObjArr[INDEX].classPart === ')') {
                            INDEX++
                            while (GlobalTokensObjArr[INDEX].classPart === '\n') {
                                INDEX++;
                            }
                            if (GlobalTokensObjArr[INDEX].classPart === '{') {
                                INDEX++;
                                while (GlobalTokensObjArr[INDEX].classPart === '\n') {
                                    INDEX++;
                                }
                                if (this.BODY()) {
                                    while (GlobalTokensObjArr[INDEX].classPart === '\n') {
                                        INDEX++;
                                    }
                                    if (this.OELSE()) {
                                        return true
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    } else {
        return false
    }
}

exports.OELSE = () => {
    if (GlobalTokensObjArr[INDEX].classPart === '\n') {
        INDEX++;
        return true
    } else if (GlobalTokensObjArr[INDEX].classPart === 'else') {
        INDEX++;
        while (GlobalTokensObjArr[INDEX].classPart === '\n') {
            INDEX++;
        }
        if (GlobalTokensObjArr[INDEX].classPart === '{') {
            INDEX++;
            while (GlobalTokensObjArr[INDEX].classPart === '\n') {
                INDEX++;
            }
            if (this.BODY()) {
                if (GlobalTokensObjArr[INDEX].classPart === '}') {
                    INDEX++;
                    return true
                }
            }
        }
    }
    else 
        return true
}

exports.ROP = () => {
    if (GlobalTokensObjArr[INDEX].classPart === 'Conditional Operators' ||
        GlobalTokensObjArr[INDEX].classPart === 'Or Operator' ||
        GlobalTokensObjArr[INDEX].classPart === 'And Operator' ||
        GlobalTokensObjArr[INDEX].classPart === 'Relational Operator' ||
        GlobalTokensObjArr[INDEX].classPart === 'Assignment Operator' ||
        GlobalTokensObjArr[INDEX].classPart === 'Conditional Operators'
    ) {
        INDEX++;
        return true
    }
    return false
}

exports.COND = () => {
    if (this.BOOL() || this.ID_CONST())
        return true
    return false
}

exports.BOOL = () => {
    if (GlobalTokensObjArr[INDEX].classPart === 'true' || GlobalTokensObjArr[INDEX].classPart === 'false') {
        INDEX++;
        return true
    } else
        return false
}

exports.ID_CONST = () => {
    if (GlobalTokensObjArr[INDEX].classPart === 'Identifier' || this.CONST()) {
        INDEX++
        return true
    }
    return false
}



exports.FN_ST = () => {

}

exports.WHILE_ST = () => {

}

exports.FOR_ST = () => {

}

exports.DEC = () => {
    if (GlobalTokensObjArr[INDEX].classPart === 'DataType') {
        INDEX++;
        if (GlobalTokensObjArr[INDEX].classPart === 'Identifier') {
            INDEX++;
            if (this.LIST()) {
                return true
            }
        }
    }
}

exports.LIST = () => {
    if (GlobalTokensObjArr[INDEX].classPart === '\n') {
        INDEX++;
        return true
    } else if (GlobalTokensObjArr[INDEX].classPart === 'Assignment Operator') {
        INDEX++;
        if (this.COI()) {
            if (this.LIST()) {
                return true
            }
        }
    } else if (GlobalTokensObjArr[INDEX].classPart === ',') {
        INDEX++;
        if (GlobalTokensObjArr[INDEX].classPart === 'Identifier') {
            INDEX++;
            if (this.LIST()) {
                return true
            }
        }
    } else
        return false
}

exports.ASSIGN_ST = () => {
    if (GlobalTokensObjArr[INDEX].classPart === 'DataType') {
        INDEX++;
        if (GlobalTokensObjArr[INDEX].classPart === 'Identifier') {
            INDEX++;

            if (GlobalTokensObjArr[INDEX].classPart === 'Assignment Operator') {
                INDEX++;
                if (this.COI()) {
                    return true
                }
            }
        }

    } else
        return false
}

exports.COI = () => {
    if (GlobalTokensObjArr[INDEX].classPart === 'Identifier' || this.CONST()) {
        INDEX++;
        return true
    }
}

exports.CONST = () => {
    if (GlobalTokensObjArr[INDEX].classPart === 'Integer' || GlobalTokensObjArr.classPart === 'Double' || GlobalTokensObjArr.classPart === 'String')
        return true
    else
        return false
}