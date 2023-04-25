let person1 = {
    name: 'John',
    age: 30
}

person1.name = "Bob"

let person2 = person1; // { name: 'Bob', age: 30 }

person2.name = "Alice"


console.log(person1);
console.log(person2);

const arr1 = [1, 2, 3];
const arr2 = arr1;
arr2.push(4);
console.log(arr1);
console.log(arr2);
