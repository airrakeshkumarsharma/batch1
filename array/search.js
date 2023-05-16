/**
 * 1. problem understanding: 
 * 2. Techniques
 * 3. Necessary changes
 * 4. Pseudo code
 * 5. Algorithms
 * 6. Code
 */
// find a target in a random array
/**
 * Q: Find or search a target from an array
 * array = [1, 4, 3, 5, 2]
 * target = 5
 * Ans -> true otherwise false
 */

const array = [1, 4, 3, 5, 2]
const target = 5

const arraySize = array.length

let isFound = false

for(let i =0; i<arraySize; i++){
    if(array[i]===target) {
        isFound = true
        break
    }
}

console.log(isFound)




