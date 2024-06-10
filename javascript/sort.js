const numbers = [5, 2, 4, 7, 11, 24, 30]
const names = ['Matheus', 'Yano', 'Felipe', 'Geoorge', 'Carvalho', 'Carla']
const bands = [
  { name: 'Pearl Jam', year: 1996 },
  { name: 'Iron Maiden', year: 1997 },
  { name: 'Nirvana', year: 1995 }
]

// const sorted = numbers.slice().sort((a, b) => a - b)
// const sorted = names.slice().sort((a, b) => a.localeCompare(b))

const sorted = bands.slice().sort((a, b) => {
  return b.year - a.year
})

console.log(sorted)
