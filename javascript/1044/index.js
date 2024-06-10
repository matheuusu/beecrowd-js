const input = require('fs').readFileSync('./1044/stdin', 'utf8')
const lines = input.split('\n')

const values = lines
  .shift()
  .split(' ')
  .map(item => parseInt(item))

const isMultiple = values[0] % values[1] === 0 || values[1] % values[0] === 0

console.log(isMultiple ? 'Sao Multiplos' : 'Nao sao Multiplos')
