let x = 5
let y = 10

function add() {
    const z = x+y // only written
    return z
}

function subtract() {
    const z = x-y
    return z
}

const addition = add()
const subtraction = subtract()

console.log(addition)
console.log(subtraction)