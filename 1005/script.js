const input = require('fs').readFileSync('./1005/stdin', 'utf8')
const lines = input.split('\n')

let a = parseFloat(lines.shift())
let b = parseFloat(lines.shift())

let media = (a * 3.5 + b * 7.5) / 11

console.log(`MEDIA = ${media.toFixed(5)}`)
