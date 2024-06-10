const input = require('fs').readFileSync('./1050/stdin', 'utf8')
const lines = input.split('\n')

const value = parseInt(lines.shift())

const states = [
  { number: 61, name: 'Brasilia' },
  { number: 71, name: 'Salvador' },
  { number: 11, name: 'Sao Paulo' },
  { number: 21, name: 'Rio de Janeiro' },
  { number: 32, name: 'Juiz de Fora' },
  { number: 19, name: 'Campinas' },
  { number: 27, name: 'Vitoria' },
  { number: 31, name: 'Belo Horizonte' }
]

const state = states.find(state => state.number === value)

if (state) {
  console.log(state.name)
} else {
  console.log('DDD nao cadastrado')
}
