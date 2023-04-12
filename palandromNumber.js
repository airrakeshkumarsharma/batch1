// 121, 313, 4114
// 121, 313, 4114

// 32323
// 32323

// 32323243
// 34232323

// num = 212121

let num = 32323231 // 3232323
let compareVar = num // 1441

let value = ""
while(num>0) {
    rem = num % 10 // last element separate
    num = Math.floor(num / 10) // 1441

    value += rem // string + num = string
}

const castNum = Number(value) // 1441 -> string -> number

if(castNum==compareVar) { // 1441===1441
    console.log('Palindrome Number')
} else {  
    console.log('Not a Palindrome Number')
}
