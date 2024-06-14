// Import the 'fs' module to read the file
// Split the input string by newline to get an array of lines
const input = require("fs").readFileSync("./1001/stdin", "utf8")
const lines = input.split("\n")

// Destructure the lines array to extract the first two numbers and convert them to float
const [a, b] = lines.map((number) => parseFloat(number))

// Calculate the sum and print the result
console.log(`X = ${a + b}`)
