
// a=5, b=10 pass as value
function add(a, b, c) { // a, b
    console.log(a, b, c)
    const d = a + b + c // only written
    return d
}

const x = "abc"
const y = true
const z = 15

const addition = add(x, y, z)  // a = 5, b = 10, c = 15
console.log(addition)