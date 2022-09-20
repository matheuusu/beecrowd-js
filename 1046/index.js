const input = require('fs').readFileSync('./1046/stdin', 'utf8')
const lines = input.split('\n')

let temp = 0
const hours = lines
  .shift()
  .split(' ')
  .map(item => parseInt(item))

for (let value of hours) {
  if (value === 0) {
    let index = hours.indexOf(value)
    hours[index] = 24
  }
}

if (hours[0] >= hours[1]) {
  temp = 24 - hours[0] + hours[1]
} else {
  temp = hours[1] - hours[0]
}

console.log(`O JOGO DUROU ${temp} HORA(S)`)
