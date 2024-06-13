const input = require("fs").readFileSync("./1001/stdin", "utf8")
const lines = input.split("\n")

const [a, b] = lines.map((number) => parseFloat(number))

console.log(`X = ${a + b}`)
