// let fruits = ["banana", "apple", "orange"];

// fruits = fruits.sort().reverse()

// for (let fruit of fruits) {
//   console.log(fruit)
// }


let numbers = [100, 50, 70, 20, 50, 5, 10];
numbers = numbers.sort(fromlowestToHighest)

numbers.forEach(print)

//callback function
function fromHighestToLowest(x, y) {
  return x - y;
}

//callback function
function fromlowestToHighest(x, y){
  return y - x;
}

function print(myNumbers) {
  console.log(myNumbers)
}

//02:55:04
