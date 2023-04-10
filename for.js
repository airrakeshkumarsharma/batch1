// get the sum of all the element inside an array
const arr = [1, 44, 3, 4, 5, 6, 7, 8, 9, 10]

let sum = 0
for(let i=0; i<arr.length; i++) { // start, end, step
    sum = sum + arr[i] // i = 1, sum = 0 + 1 = 1, i = 1, sum = 1 + 44 = 45, i = 2 sum = 45 + 3 = 48
}

console.log(sum)