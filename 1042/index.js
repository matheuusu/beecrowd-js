const input = require('fs').readFileSync('./1042/stdin', 'utf8')
const lines = input.split('\n')

const values = lines
  .shift()
  .split(' ')
  .map(item => parseFloat(item))

const results = values.slice().sort((a, b) => a - b)

for (const element of results) {
  console.log(element)
}

console.log()

for (const element of values) {
  console.log(element)
}
