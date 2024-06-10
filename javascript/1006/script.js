const input = require('fs').readFileSync('./1006/stdin', 'utf8')
const lines = input.split('\n')

let a = parseFloat(lines.shift())
let b = parseFloat(lines.shift())
let c = parseFloat(lines.shift())

let media = (a * 2 + b * 3 + c * 5) / 10

console.log(`MEDIA = ${media.toFixed(1)}`)
