const input = require('fs').readFileSync('./1045/stdin', 'utf8')
const lines = input.split('\n')

const values = lines
  .shift()
  .split(' ')
  .map(item => parseFloat(item))

const sorted = values.slice().sort((a, b) => b - a)

const isNotTriangle = sorted[0] >= sorted[1] + sorted[2]
const rightTriangle =
  Math.pow(sorted[0], 2) === Math.pow(sorted[1], 2) + Math.pow(sorted[2], 2)
const obtuseTriangle =
  Math.pow(sorted[0], 2) > Math.pow(sorted[1], 2) + Math.pow(sorted[2], 2)
const acuteTriangle =
  Math.pow(sorted[0], 2) < Math.pow(sorted[1], 2) + Math.pow(sorted[2], 2)
const isoTriangle =
  (sorted[0] === sorted[1] && sorted[0] !== sorted[2]) ||
  (sorted[0] === sorted[2] && sorted[0] !== sorted[1]) ||
  (sorted[1] === sorted[2] && sorted[1] !== sorted[0])
const equiTriangle = sorted[0] === sorted[1] && sorted[0] === sorted[2]

const triangles = [
  { id: 0, name: 'NAO FORMA TRIANGULO', isTrue: isNotTriangle },
  { id: 1, name: 'TRIANGULO RETANGULO', isTrue: rightTriangle },
  { id: 2, name: 'TRIANGULO OBTUSANGULO', isTrue: obtuseTriangle },
  { id: 3, name: 'TRIANGULO ACUTANGULO', isTrue: acuteTriangle },
  { id: 4, name: 'TRIANGULO EQUILATERO', isTrue: equiTriangle },
  { id: 5, name: 'TRIANGULO ISOSCELES', isTrue: isoTriangle }
]

let continua = true

triangles.map(element => {
  if (element.id === 0 && element.isTrue) {
    console.log(element.name)
    continua = false
  } else if (element.isTrue && continua) {
    console.log(element.name)
  } else {
    return
  }
})
