const input = require('fs').readFileSync('./1041/stdin', 'utf8')
const lines = input.split('\n')

const [x, y] = lines
  .shift()
  .split(' ')
  .map(item => parseFloat(item))

if (x == y && y == 0) {
  console.log('Origem')
} else {
  if (x > 0 && y > 0) {
    console.log('Q1')
  } else if (x < 0 && y > 0) {
    console.log('Q2')
  } else if (x < 0 && y < 0) {
    console.log('Q3')
  } else if (x > 0 && y < 0) {
    console.log('Q4')
  } else if (y == 0) {
    console.log('Eixo X')
  } else {
    console.log('Eixo Y')
  }
}
