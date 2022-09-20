const input = require('fs').readFileSync('./1010/stdin', 'utf8')
const lines = input.split('\n')

const [idItem1, quantityItem1, valueItem1] = lines.shift().split(' ')
const [idItem2, quantityItem2, valueItem2] = lines.shift().split(' ')

let amount = quantityItem1 * valueItem1 + quantityItem2 * valueItem2

console.log(`VALOR A PAGAR: R$ ${amount.toFixed(2)}`)
