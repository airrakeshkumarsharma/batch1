

const array = [1, 2, 5, 7, 9, 10]
const num = 5

for(let i=0; i<array.length; i++) {
    if(array[i] == num) {
        console.log('Number found')
        break // exit from the loop
    }
}