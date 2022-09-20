const input = require('fs').readFileSync('./1017/stdin', 'utf8')
const lines = input.split('\n')

const hours = parseFloat(lines.shift())
const velocity = parseFloat(lines.shift())

let fuel = (hours * velocity) / 12

console.log(fuel.toFixed(3))
