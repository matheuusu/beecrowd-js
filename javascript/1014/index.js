const input = require('fs').readFileSync('./1014/stdin', 'utf8')
const lines = input.split('\n')

const x = parseInt(lines.shift())
const y = parseFloat(lines.shift())

let total = x / y

console.log(`${total.toFixed(3)} km/l`)
