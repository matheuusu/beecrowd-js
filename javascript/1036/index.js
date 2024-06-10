const input = require('fs').readFileSync('./1036/stdin', 'utf8')
const lines = input.split('\n')

const [a, b, c] = lines
  .shift()
  .split(' ')
  .map(line => parseFloat(line))

const delta = Math.pow(b, 2) - 4 * a * c

if (!a || a === 0 || !b || !c) {
  console.log('Impossivel calcular')
} else if (delta < 0) {
  console.log('Impossivel calcular')
} else {
  const r1 = (-b + Math.sqrt(delta)) / (2 * a)
  const r2 = (-b - Math.sqrt(delta)) / (2 * a)

  console.log(`R1 = ${r1.toFixed(5)}`)
  console.log(`R2 = ${r2.toFixed(5)}`)
}
