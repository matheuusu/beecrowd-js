const input = require('fs').readFileSync('./1013/stdin', 'utf8')
const lines = input.split('\n')

const [a, b, c] = lines
  .shift()
  .split(' ')
  .map(line => parseFloat(line))

const maiorAB = (a + b + Math.abs(a - b)) / 2
const maiorABC = (maiorAB + c + Math.abs(maiorAB - c)) / 2

console.log(`${maiorABC} eh o maior`)
