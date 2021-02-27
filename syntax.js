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
    if (GlobalTokensObjArr[INDEX].classPart === 'EndMarker')
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
    if (this.SST() && this.MST())
        return true
    else if (GlobalTokensObjArr[INDEX].classPart === 'return' ||
        GlobalTokensObjArr[INDEX].classPart === 'break' ||
        GlobalTokensObjArr[INDEX].classPart === 'else' ||
        GlobalTokensObjArr[INDEX].classPart === 'EndMarker') {
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