console.time('loop')

const array = [1,2,3,4,5,6,7,8,9,10]
const n = array.length

// Without if statement -> 0.03ms
// with if statement -> 3.923m
// 2 if statement ->  3.713ms
// 3 if statement -> 3.483ms

const array2 = []

for(let i=0; i<n; i++){
    array2.push(array[i])
}

console.timeEnd('loop')

console.log(array2)

// 122ms // single loop
