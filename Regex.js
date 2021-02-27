//DEFINING RE's.
exports.identifierRegex = /^[A-Za-z_]+$/;
// exports.stringRegex = /^([_|@|(a-zA-Z)][(a-zA-Z)(0-9)])|([A-Za-z][0-9])$/;
exports.stringRegex = /^[""](\W|\w)*[""]$/;
exports.integerRegex = /^[-+]?\d+$/;
exports.doubleRegex = /^[+-]?\d*[.]{1}\d+$/
// exports.charregex = ""
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
        class: "DataType",
        word: 'var'
    },
    {
        class: "if",
        word: 'if'
    },
    {
        class: "else",
        word: 'else'
    },
    {
        class: "while",
        word: 'while'
    },
    {
        class: "for",
        word: 'for'
    },
    {
        class: "Interface",
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

exports.operatorDictionary = [{
        class: "Arithmatic Op",
        word: '+'
    },
    {
        class: "Arithmatic Op",
        word: '-'
    },
    {
        class: "Arithmatic Op",
        word: '*'
    },
    {
        class: "Arithmatic Op",
        word: '/'
    },
    {
        class: "Inc/Dec",
        word: '++'
    },
    {
        class: "Inc/Dec",
        word: '--'
    },
    {
        class: "Assignment Operator",
        word: '+='
    },
    {
        class: "Assignment Operator",
        word: '-='
    },
    {
        class: "Assignment Operator",
        word: '*='
    },
    {
        class: "Conditional Operators",
        word: '=='
    },
    {
        class: "Conditional Operators",
        word: '==='
    },
    {
        class: "Assignment Operator",
        word: '='
    },
    {
        class: "Relational Operator",
        word: '>'
    },
    {
        class: "Relational Operator",
        word: '<'
    },
    {
        class: "Relational Operator",
        word: '=<'
    },
    {
        class: "Relational Operator",
        word: '>='
    },
    {
        class: "And Operator",
        word: '&&'
    },
    {
        class: "Not Operator",
        word: '!'
    },
    {
        class: "Or Operator",
        word: '||'
    },
    {
        class: "Conditional Operators",
        word: '!='
    }
]

exports.punctuatorDictionary = [{
        class: "(",
        word: '('
    },
    {
        class: ")",
        word: ')'
    },
    {
        class: "Punctuator",
        word: '&'
    },
    {
        class: "Punctuator",
        word: '|'
    },
    {
        class: "{",
        word: '{'
    },
    {
        class: "}",
        word: '}'
    },
    {
        class: "]",
        word: ']'
    },
    {
        class: "[",
        word: '['
    },
    {
        class: "Punctuator",
        word: ':'
    },

    {
        class: "Punctuator",
        word: '@'
    },

    {
        class: "Punctuator",
        word: '^'
    },

    {
        class: "Punctuator",
        word: '#'
    },
    {
        class: "Punctuator",
        word: '_'
    },
    {
        class: "Dot",
        word: '.'
    },
    {
        class: ",",
        word: ','
    }
]

// const str = "vsdfds\\a+== vdsds-=ds\*\*"
// console.log(this.stringRegex.test('"asdjkjk8jkl"'))