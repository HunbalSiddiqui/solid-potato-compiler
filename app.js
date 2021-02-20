const fs = require('fs')
const { lexer } = require('./lexical')

const inputStream = fs.readFileSync(`${__dirname}/input.txt`, 'utf-8')
// const inputStream = fs.readFileSync(`${__dirname}/mfinput.txt`, 'utf-8')

lexer(inputStream)