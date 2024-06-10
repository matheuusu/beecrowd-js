const input = require('fs').readFileSync('./1038/stdin', 'utf8')
const lines = input.split('\n')

const [id, price] = lines
  .shift()
  .split(' ')
  .map(item => parseInt(item))

const menu = [
  [1, 'Cachorro Quente', 4],
  [2, 'X-Salada', 4.5],
  [3, 'X-Bacon', 5],
  [4, 'Torrada simples', 2],
  [5, 'Refrigerante', 1.5]
]

const found = menu.find(element => element[0] == id)
const foundPrice = found[2] * price

console.log(`Total: R$ ${foundPrice.toFixed(2)}`)
