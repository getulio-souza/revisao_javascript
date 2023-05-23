//spread operator splits an array into separate parts

let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9]

console.log(...numbers)

let maximum = Math.max(...numbers)
console.log(maximum)

let class1 = ["student 1, student 2, student 3"];
let class2 = ["student 4, student 5, student 6"];

class1.push(...class2)
console.log(...class1)

