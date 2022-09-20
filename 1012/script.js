const input = require('fs').readFileSync('./1012/stdin', 'utf8')
const lines = input.split('\n')

const [a, b, c] = lines
  .shift()
  .split(' ')
  .map(item => parseFloat(item))

let triangle = (a * c) / 2
let circle = Math.PI.toFixed(5) * c ** 2
let trapeze = ((a + b) * c) / 2
let square = b ** 2
let rectangle = a * b

console.log(`TRIANGULO: ${triangle.toFixed(3)}`)
console.log(`CIRCULO: ${circle.toFixed(3)}`)
console.log(`TRAPEZIO: ${trapeze.toFixed(3)}`)
console.log(`QUADRADO: ${square.toFixed(3)}`)
console.log(`RETANGULO: ${rectangle.toFixed(3)}`)
