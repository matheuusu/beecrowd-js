const input = require('fs').readFileSync('./1037/stdin', 'utf8')
const lines = input.split('\n')

const value = parseFloat(lines.shift())

if (value >= 0 && value <= 100) {
  if (value <= 25) {
    console.log('Intervalo [0,25]')
  } else if (value > 25 && value <= 50) {
    console.log('Intervalo (25,50]')
  } else if (value > 50 && value <= 75) {
    console.log('Intervalo (50,75]')
  } else {
    console.log('Intervalo (75,100]')
  }
} else {
  console.log('Fora de intervalo')
}
