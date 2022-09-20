const input = require('fs').readFileSync('./1011/stdin', 'utf8')
const lines = input.split('\n')

const radio = parseFloat(lines.shift())
const volume = (4 / 3) * Math.PI.toFixed(5) * radio ** 3

console.log(`VOLUME = ${volume.toFixed(3)}`)
