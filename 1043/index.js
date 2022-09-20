const input = require('fs').readFileSync('./1043/stdin', 'utf8')
const lines = input.split('\n')

const [side1, side2, side3] = lines
  .shift()
  .split(' ')
  .map(item => parseFloat(item))

let perimeter = side1 + side2 + side3
let area = ((side1 + side2) * side3) / 2
const isTrue =
  side1 < side2 + side3 && side2 < side3 + side1 && side3 < side1 + side2

if (isTrue) {
  console.log(`Perimetro = ${perimeter.toFixed(1)}`)
} else {
  console.log(`Area = ${area.toFixed(1)}`)
}
