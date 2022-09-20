const input = require('fs').readFileSync('./1020/stdin', 'utf8')
const lines = input.split('\n')

const time = [365, 30, 1]

let value = parseInt(lines.shift())
const count = []

for (let item of time) {
  count.push(parseInt(value / item))

  value = value % item
}

if (count[1] == 12 && count[2] >= 1) {
  count[0] += 1
  count[1] = 0
}

console.log(`${count[0]} ano (s)`)
console.log(`${count[1]} mes (es)`)
console.log(`${count[2]} dia (s)`)
