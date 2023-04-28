// const array = [10, 2, 4, 3, 5, 1];

// const reverseArray = [10, 5, 4, 3, 2, 1];

// for, while
// 1. question: True
// 2. Technique:
    // 1. Swapping
    // 2. Loop (while loop)
    // 3. i>j -> loop close
const array = [1, 2, 3, 4, 5, 10, 55, 11, 12, 13, 14, 15];
let i = 0 // 0, 1, 2, 3
let j = array.length - 1 // 5, 4, 3, 2
while (i < j) {
    // Exchange or swapping
    const c = array[i] // i = 2, c= 3
    array[i] = array[j] // 3 = 4
    array[j] = c // 4 = 3

    i++
    j--
}

console.log(array)