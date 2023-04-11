// while(condition) { // end = condition
// statement
// }

// let i = 0
// while(i <= 10) {
//     console.log('Hello World')

//     i++
// }

// digits = 1213 = 4
// let num = 33333333
// let count = 0
// while(num > 0) {
//     num = Math.floor(num / 10)  // Assignment x=x/10
//     count++
// }

// console.log(count)

let num = 2232
let rem
let sum = 0

while(num>0) {
    rem = num % 10
    num = Math.floor(num / 10)
    sum = sum + rem
}

console.log(sum)