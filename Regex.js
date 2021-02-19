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
        class: "AdditionAssignment/SubtractionAssignment",
        word: '+='
    },
    {
        class: "AdditionAssignment/SubtractionAssignment",
        word: '-='
    },
    {
        class: "MultiplyAssignment",
        word: '*='
    },
    {
        class: "ComparisonOperators",
        word: '=='
    },
    {
        class: "ComparisonOperators",
        word: '==='
    },
    {
        class: "Assignment Operator",
        word: '='
    },
    {
        class: "Comparison Operator",
        word: '>'
    },
    {
        class: "Comparison Operator",
        word: '<'
    },
    {
        class: "Comparison Operator",
        word: '=<'
    },
    {
        class: "Comparison Operator",
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
        class: "Not Equals To Operator",
        word: '!='
    }
]

exports.punctuatorDictionary = [{
        class: "bracketops",
        word: '('
    },
    {
        class: "bracketops",
        word: ')'
    },
    {
        class: "bracketops",
        word: '{'
    },
    {
        class: "bracketops",
        word: '}'
    },
    {
        class: "bracketops",
        word: ']'
    },
    {
        class: "bracketops",
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
    }
]

// const str = "vsdfds\\a+== vdsds-=ds\*\*"
console.log(this.stringRegex.test('"asdjkjk8jkl"'))