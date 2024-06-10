const input = require('fs').readFileSync('./1040/stdin', 'utf8')
const lines = input.split('\n')

const notes = lines
  .shift()
  .split(' ')
  .map(item => parseFloat(item))

const examGrade = parseFloat(lines.shift())

let media = (notes[0] * 2 + notes[1] * 3 + notes[2] * 4 + notes[3] * 1) / 10

console.log(`Media: ${media.toFixed(1)}`)

if (media >= 7) {
  console.log('Aluno aprovado.')
} else if (media < 5) {
  console.log('Aluno reprovado.')
} else {
  media = (media + examGrade) / 2

  console.log('Aluno em exame.')
  console.log(`Nota do exame: ${examGrade.toFixed(1)}`)

  if (media >= 5) {
    console.log('Aluno aprovado.')
  } else {
    console.log('Aluno reprovado.')
  }

  console.log(`Media final: ${media.toFixed(1)}`)
}
