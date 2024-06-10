var input = require("fs").readFileSync("./1001/stdin", "utf8")
var lines = input.split("\n")

let a = parseInt(lines.shift())
let b = parseInt(lines.shift())

let x = a + b

console.log(`X = ${x}`)
