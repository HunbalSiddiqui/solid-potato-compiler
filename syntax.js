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
    while (GlobalTokensObjArr[INDEX].classPart === '\n') {
        INDEX++;
    }
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
    // console.log("Current token in MST FN",GlobalTokensObjArr[INDEX])
    if (this.SST()) {
        // console.log("Current token in MST FN in SST",GlobalTokensObjArr[INDEX])
        if (this.MST()) {
            return true
        }
    } else if (GlobalTokensObjArr[INDEX].classPart === 'return' ||
        GlobalTokensObjArr[INDEX].classPart === 'break' ||
        // GlobalTokensObjArr[INDEX].classPart === 'else' ||
        GlobalTokensObjArr[INDEX].classPart === 'EndMarker' ||
        // GlobalTokensObjArr[INDEX].classPart === 'Identifier' ||
        GlobalTokensObjArr[INDEX].classPart === 'if' ||
        GlobalTokensObjArr[INDEX].classPart === 'for' ||
        GlobalTokensObjArr[INDEX].classPart === 'DataType' ||
        GlobalTokensObjArr[INDEX].classPart === '}') {
        INDEX++;
        return true
    } else {
        return false
    }
}
// Singleline statement
exports.SST = () => {
    if (this.IF_OELSE() || this.CLASS_DEF() || this.FN_ST() || this.WHILE_ST() || this.FOR_ST() || this.DEC() || this.ASSIGN_ST())
        return true
    return false
}
// Class def
exports.CLASS_DEF = () => {
    // console.log("CLASS DEF",GlobalTokensObjArr[INDEX].value)
    if (this.AM_ST()) {
        if (this.TM_ST()) {
            if (GlobalTokensObjArr[INDEX].classPart === 'class') {
                INDEX++;
                if (GlobalTokensObjArr[INDEX].classPart === 'Identifier') {
                    INDEX++
                    while (GlobalTokensObjArr[INDEX].classPart === '\n') {
                        INDEX++;
                    }
                    if (this.INHERIT_ST()) {
                        while (GlobalTokensObjArr[INDEX].classPart === '\n') {
                            INDEX++;
                        }
                        if (GlobalTokensObjArr[INDEX].classPart === '{') {
                            INDEX++;
                            while (GlobalTokensObjArr[INDEX].classPart === '\n') {
                                INDEX++;
                            }
                            if (this.BODY()) {
                                return true
                            }
                        }
                    }
                }
            }
        }
    }
}

exports.AM_ST = () => {
    if (GlobalTokensObjArr[INDEX].classPart === 'public' ||
        GlobalTokensObjArr[INDEX].classPart === 'private' ||
        GlobalTokensObjArr[INDEX].classPart === 'protected') {
        INDEX++;
        return true
    }
    return false
}

exports.TM_ST = () => {
    if (GlobalTokensObjArr[INDEX].classPart === 'static' ||
        GlobalTokensObjArr[INDEX].classPart === 'abstract' ||
        GlobalTokensObjArr[INDEX].classPart === 'final') {
        INDEX++;
        return true
    } else if (GlobalTokensObjArr[INDEX].classPart === 'class') {
        // INDEX++;
        return true
    } else
        return false
}

exports.INHERIT_ST = () => {
    while (GlobalTokensObjArr[INDEX].classPart === '\n') {
        INDEX++;
    }
    if (GlobalTokensObjArr[INDEX].classPart === 'extends') {
        INDEX++;
        if (GlobalTokensObjArr[INDEX].classPart === 'Identifier') {
            INDEX++;
            if (this.INHERIT_ST()) {
                return true
            }
        }
    } else if (GlobalTokensObjArr[INDEX].classPart === '{')
        return true
    else
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
                // INDEX++;
                while (GlobalTokensObjArr[INDEX].classPart === '\n') {
                    INDEX++;
                }
                return true
            }
        }
    } else
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
    if (GlobalTokensObjArr[INDEX].classPart === 'fn' || GlobalTokensObjArr[INDEX].classPart === 'function') {
        INDEX++;
        if (this.AM_ST()) {
            if (this.TM_ST()) {
                if (this.RETURN_TYPE()) {
                    if (GlobalTokensObjArr[INDEX].classPart === 'Identifier') {
                        INDEX++
                        if (GlobalTokensObjArr[INDEX].classPart === '(') {
                            INDEX++;
                            if (this.PARAMS()) {
                                console.log(GlobalTokensObjArr[INDEX].classPart === ")")
                                if (GlobalTokensObjArr[INDEX].classPart === ')') {
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
                                            while (GlobalTokensObjArr[INDEX].classPart === '\n') {
                                                INDEX++;
                                            }
                                            if (this.RETURN_TYPE()) {
                                                return true
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    } else
        return false
}

exports.PARAMS = () => {
    if (this.ID_CONST()) {
        if (this.MULTI_PARAMS()) {
            // if (GlobalTokensObjArr[INDEX].classPart === ')') {
            return true
            // }
        }
    } else if (GlobalTokensObjArr[INDEX].classPart === ')')
        return true
    else
        return false
}

exports.MULTI_PARAMS = () => {
    if (GlobalTokensObjArr[INDEX].classPart === ',') {
        INDEX++;
        if (this.PARAMS()) {
            return true
        }
    } else if (GlobalTokensObjArr[INDEX].classPart === ')') {
        return true
    } else
        return false
}

exports.RETURN_TYPE = () => {
    console.log("In return type", GlobalTokensObjArr[INDEX].value, GlobalTokensObjArr[INDEX].classPart === 'void')
    if (GlobalTokensObjArr[INDEX].classPart === 'void' || GlobalTokensObjArr[INDEX].classPart === 'DataType') {
        INDEX++;
        return true
    } else
        return false
}

exports.WHILE_ST = () => {

}

exports.FOR_ST = () => {
    // if(GlobalTokensObjArr[INDEX].classPart === 'for')
    // {
    //     INDEX++;
    //     if(GlobalTokensObjArr[INDEX].classPart === '(')
    //     {
    //         INDEX++;
    //         if(this.C1())
    //         {
    //             if(GlobalTokensObjArr[INDEX].classPart === ',')
    //             {
    //                 INDEX++;
    //                 if(this.C2())
    //                 {
    //                     if(GlobalTokensObjArr[INDEX].classPart === ',')
    //                     {
    //                         INDEX++;
    //                         if(this.C3())
    //                         {
    //                             if(GlobalTokensObjArr[INDEX].classPart === ')')
    //                             {
    //                                 INDEX++;
    //                                 return true
    //                             }
    //                         }
    //                     }
    //                 }
    //             }
    //         }
    //     }
    // }
}

exports.C1 = () => {
    if (this.DEC() || this.ASSIGN_ST()) {
        return true
    }
    return false
}

exports.C2 = () => {
    if (this.COND()) {
        INDEX++;
        return true
    }
    return false
}

exports.C3 = () => {
    if (GlobalTokensObjArr[INDEX].classPart === 'Inc/Dec') {
        INDEX++;
        if (GlobalTokensObjArr[INDEX].classPart === 'Identifier') {
            INDEX++;
            return true
        }
    } else if (GlobalTokensObjArr[INDEX].classPart === 'Identifier') {
        INDEX++;
        if (GlobalTokensObjArr[INDEX].classPart === 'Inc/Dec') {
            INDEX++;
            return true
        }
    } else
        return false
}

exports.DEC = () => {
    if (GlobalTokensObjArr[INDEX].classPart === 'DataType') {
        INDEX++;
        // console.log("DEC Statement running")
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
        console.log("Assign Statement running")
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
    if (GlobalTokensObjArr[INDEX].classPart === 'Integer' || GlobalTokensObjArr[INDEX].classPart === 'Double' || GlobalTokensObjArr[INDEX].classPart === 'String')
        return true
    else
        return false
}