const input = require('fs').readFileSync('./1008/stdin', 'utf8')
const lines = input.split('\n')

let number = parseInt(lines.shift())
let salary = parseInt(lines.shift())
let hours = parseFloat(lines.shift())

let total = salary * hours

console.log(`NUMBER = ${number}`)
console.log(`SALARY = U$ ${total.toFixed(2)}`)
