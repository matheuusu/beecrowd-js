const input = require('fs').readFileSync('./1016/stdin', 'utf8')
const lines = input.split('\n')

let minutes = (60 * parseFloat(lines.shift())) / 30

console.log(`${minutes} minutos`)
