const input = require('fs').readFileSync('./1019/stdin', 'utf8')
const lines = input.split('\n')

let value = parseInt(lines.shift())

const time = [3600, 60, 1]
const count = []

for (let item of time) {
  count.push(parseInt(value / item))

  value = value % item
}

console.log(count.join(':'))
