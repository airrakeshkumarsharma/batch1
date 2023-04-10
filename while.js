// while(condition) { // end = condition
// statement
// }

// let i = 0
// while(i <= 10) {
//     console.log('Hello World')

//     i++
// }

// digits = 1213 = 4
let num = 121344934903840938049332232323232323223233323
let count = 0
while(num > 0) {
    num = Math.floor(num / 10)  // Assignment x=x/10
    count++
}

console.log(count)