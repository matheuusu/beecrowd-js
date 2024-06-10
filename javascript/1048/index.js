const input = require('fs').readFileSync('./1048/stdin', 'utf8')
const lines = input.split('\n')

const value = parseFloat(lines.shift())
let salary = value
let readjustment

if (value <= 400) {
  salary += value * 0.15
  readjustment = 0.15
} else if (value <= 800) {
  salary += value * 0.12
  readjustment = 0.12
} else if (value <= 1200) {
  salary += value * 0.1
  readjustment = 0.1
} else if (value <= 2000) {
  salary += value * 0.07
  readjustment = 0.07
} else {
  salary += value * 0.04
  readjustment = 0.04
}

let readjust = value * readjustment

console.log(`Novo salario: ${salary.toFixed(2)}`)
console.log(`Reajuste ganho: ${readjust.toFixed(2)}`)
console.log(`Em percentual: ${Math.floor(readjustment * 100)} %`)
