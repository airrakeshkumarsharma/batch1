// const marks = 300

// if(marks>180) { // false
//     console.log("You are passed!")
// } else {
//     console.log("You are failed!")
// }

// Find even or odd
// const num = 11

// if(num%2==0) {
//     console.log("Even")
// } else {
//     console.log("Odd")
// }

// Find the largest number from 2 number
// num1 = 10, num2 = 20
// const num1 = 25
// const num2 = 20
// if(num1>num2) {
//     console.log("num1 is greater than num2")
// } else {
//     console.log("num2 is greater than num1")
// }

// Find the largest number from 3 number
const num1 = 5
const num2 = 10
const num3 = 15

if(num1==num2 && num1==num3) {
    console.log("All are equal")
} else {
    console.log("All are not equal")
}

// check num1 is greater than num2, num3 => num1>num2 and num1> num2
// check num2 is greater than num1, num3
// else num2 is greater than num1, num3
if(num1>num2 && num1>num3) {
    console.log("num1 is greater than num2 and num3")
} else {
    if(num2>num1 && num2>num3) { // true && false = false
        console.log("num2 is greater than num1 and num3")
    } else {
        console.log("num3 is greater than num1 and num2")
    }
}


