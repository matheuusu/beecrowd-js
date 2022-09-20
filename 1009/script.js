const input = require('fs').readFileSync('./1009/stdin', 'utf8')
const lines = input.split('\n')

let name = lines.shift()
let salary = parseFloat(lines.shift())
let sales = parseFloat(lines.shift())

let total = salary + sales * 0.15

console.log(`TOTAL = R$ ${total.toFixed(2)}`)
