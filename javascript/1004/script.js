let input = require('fs').readFileSync('./1004/stdin', 'utf8')
var lines = input.split('\n')

let a = parseInt(lines.shift())
let b = parseInt(lines.shift())

let prod = a * b

console.log(`PROD = ${prod}`)
