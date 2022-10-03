const input = require('fs').readFileSync('./1047/stdin', 'utf8')
const lines = input.split('\n')

const [hoursIn, minutesIn, hoursOut, minutesOut] = lines
  .shift()
  .split(' ')
  .map(element => parseInt(element))

let timeHours = [hoursIn, hoursOut]
let timeMinutes = [minutesIn, minutesOut]
let hours, minutes

for (let element of timeHours) {
  if (element === 0) {
    element = 24
  }
}

for (let element of timeMinutes) {
  if (element === 0) {
    element = 60
  }
}

if (timeHours[0] >= timeHours[1]) {
  hours = 24 - timeHours[0] + timeHours[1]
} else {
  hours = timeHours[1] - timeHours[0]
}

if (timeMinutes[0] >= timeMinutes[1]) {
  minutes = 60 - timeMinutes[0] + timeMinutes[1]
  if (minutes >= 60) {
    minutes = 0
  } else {
    hours -= 1
  }
} else {
  if (timeHours[0] === timeHours[1]) {
    hours = 0
  }
  minutes = timeMinutes[1] - timeMinutes[0]
}

console.log(
  `O JOGO DUROU ${Math.abs(hours)} HORA(S) E ${Math.abs(minutes)} MINUTO(S)`
)
