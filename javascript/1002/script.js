let input = require('fs').readFileSync('./1002/stdin', 'utf8')
let lines = input.split('\n')

const n = 3.14159

let raio = parseFloat(lines.shift()).toFixed(2)
let area = n * Math.pow(raio, 2)

console.log(`A=${area.toFixed(4)}`)
