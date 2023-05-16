const array = [1, 4, 5, 8, 8, 1, 2, 1, 4]
// 1-> 3, 4->2, 5->1, 8->2
// [[1, 3], [4, 2], [5, 1], [8,2], [2, 1]]

let size = array.length
const frequency = [[1, 1]]

for (let i = 0; i < size; i++) {
    let isFound = false
    for (let j = 0; j < frequency.length; j++) {
        if (frequency[j][0] === array[i]) {
            frequency[j][1]++
            isFound = true
            break
        }
    } // j loop¯

    if (!isFound) {
        frequency.push([array[i], 1])
    }
} // i loop¯