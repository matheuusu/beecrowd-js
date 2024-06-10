const input = require('fs').readFileSync('./1015/stdin', 'utf8')
const lines = input.split('\n')

const [x1, y1] = lines
  .shift()
  .split(' ')
  .map(item => parseFloat(item))

const [x2, y2] = lines
  .shift()
  .split(' ')
  .map(item => parseFloat(item))

let distance = Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2))

console.log(distance.toFixed(4))
