const input = require('fs').readFileSync('./1035/stdin', 'utf8')
const lines = input.split('\n')

const [a, b, c, d] = lines
  .shift()
  .split(' ')
  .map(item => parseFloat(item))

const isTrue = b > c && d > a
const isBigger = c + d > a + b
const isPositive = c > 0 && d > 0
const isPair = a % 2 === 0

if (isTrue && isBigger && isPositive && isPair) {
  console.log('Valores aceitos')
} else {
  console.log('Valores nao aceitos')
}
