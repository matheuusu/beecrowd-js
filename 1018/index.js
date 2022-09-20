const input = require('fs').readFileSync('./1018/stdin', 'utf8')
const lines = input.split('\n')

let value = parseFloat(lines.shift())

const notes = [100, 50, 20, 10, 5, 2, 1]

console.log(value)

for (let note of notes) {
  let qtdNotes = parseInt(value / note)
  console.log(`${qtdNotes} nota(s) de R$ ${note},00`)
  value = value % note
}
