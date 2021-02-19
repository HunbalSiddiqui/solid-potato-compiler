//DEFINING RE's.
exports.identifierRegex = /^[A-Za-z]+$/;
exports.integerRegex = /^[-+]?\d+$/;
exports.doubleRegex = /^[+-]?\d*[.]{1}\d+$/
exports.charregex = ""
exports.stringregex = /^"*[A-Za-z]*"+$/
exports.newLineReg = /\r?\n|\r/;

exports.keywordDictionary = [{
        class: "DataType",
        word: 'int'
    },
    {
        class: "DataType",
        word: 'double'
    },
    {
        class: "DataType",
        word: 'string'
    },
    {
        class: "DataType",
        word: 'char'
    },
    {
        class: "DataType",
        word: 'bool'
    },
    {
        class: "public",
        word: 'public'
    },
    {
        class: "private",
        word: 'private'
    },
    {
        class: "protected",
        word: 'protected'
    },
    {
        class: "return",
        word: 'return'
    },
    {
        class: "static",
        word: 'static'
    },
    {
        class: "void",
        word: 'void'
    },
    {
        class: "fn",
        word: 'fn'
    },
    {
        class: "switch",
        word: 'switch'
    },
    {
        class: "class",
        word: 'class'
    },
    {
        class: "new",
        word: 'new'
    },
    {
        class: "extends",
        word: 'extends'
    },
    {
        class: "Data Type",
        word: 'var'
    },
    {
        class: "condition",
        word: 'if'
    },
    {
        class: "condition",
        word: 'else'
    },
    {
        class: "Loop",
        word: 'while'
    },
    {
        class: "Loop",
        word: 'for'
    },
    {
        class: "Interfaces",
        word: 'interface'
    },
    {
        class: "case",
        word: 'case'
    },
    {
        class: "Default",
        word: 'default'
    },
    {
        class: "Break",
        word: 'break'
    },
    {
        class: "Continue",
        word: 'continue'
    }
]