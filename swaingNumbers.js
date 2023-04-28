// swap a = 5, b = 4 => a = 4, b = 5
// swap a = 3, b = 2 => a = 2, b = 3

function swap(a, b) {
    const c = a
    a = b
    b = c
    console.log(a, b)
}
swap(5, 4)
