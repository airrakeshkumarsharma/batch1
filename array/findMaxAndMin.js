
// Find max number from an 
// 1. Find max number from two number: x = -1, y = 5
// 2. max = -Infinity, array[i]>max -> max = array[i]

const array = [5, 3, 1, 7, 2, 10]; // 5 -1

function findMaxNumberFromArray(array) {
    let i = 0 // 0, 1
    let arrayLength = array.length  // 5

    let max = -Infinity // 7

    while (i < arrayLength) { // 5<5
        if (array[i] > max) { // array[4] > 5
            max = array[i] // max = 7
        }

        i++
    }

    return max
}

function findMinNumberFromArray(array) {
    let min = Infinity // 5,3, 1
    let j = 0 // 0, 1, 2, 3,4,5
    let arrayLength2 = array.length // 5
    
    while (j < arrayLength2) { // 5 < 5
        if (array[j] < min) { // 2<1
            min = array[j]
        }
    
        j++
    }

    return min
}


const max = findMaxNumberFromArray(array)
const min = findMinNumberFromArray(array)
console.log(max)
console.log(min)



