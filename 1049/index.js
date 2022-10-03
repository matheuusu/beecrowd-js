const input = require('fs').readFileSync('./1049/stdin', 'utf8')
const lines = input.split('\n')

const a = lines.shift().trim()
const b = lines.shift().trim()
const c = lines.shift().trim()

const animals = [
  {
    vertebrado: {
      ave: { carnivoro: 'aguia', onivoro: 'pomba' },
      mamifero: { onivoro: 'homem', herbivoro: 'vaca' }
    },
    invertebrado: {
      inseto: { hematofago: 'pulga', herbivoro: 'lagarta' },
      anelideo: { hematofago: 'sanguessuga', onivoro: 'minhoca' }
    }
  }
]

console.log(animals[0][a][b][c])
