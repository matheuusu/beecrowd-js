const input = require('fs').readFileSync('./1007/stdin', 'utf8')
const lines = input.split('\n')

let a = parseInt(lines.shift())
let b = parseInt(lines.shift())
let c = parseInt(lines.shift())
let d = parseInt(lines.shift())

let prod = a * b - c * d

console.log(`DIFERENCA = ${prod}`)
