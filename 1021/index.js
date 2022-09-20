const input = require('fs').readFileSync('./1021/stdin', 'utf8')
const lines = input.split('\n')

let value = parseFloat(lines.shift())

const notes = [100, 50, 20, 10, 5, 2]
const cents = [1.0, 0.5, 0.25, 0.1, 0.05, 0.01]

console.log('NOTAS:')

for (let item of notes) {
  let qtNotes = parseInt(value / item)
  console.log(`${qtNotes} nota(s) de R$ ${item.toFixed(2)}`)

  value = value % item
}

console.log('MOEDAS:')

for (let item of cents) {
  let qtNotes = parseInt(value / item)
  console.log(`${qtNotes} moeda(s) de R$ ${item.toFixed(2)}`)

  value = (value % item) + 0.00001
}
