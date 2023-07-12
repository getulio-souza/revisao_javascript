// // Array.map() = executes a provided callback function once for each array element AND creates a new array


// //create an array with numbers
// let numbers = [1, 2, 3, 4, 5];

// //returns an new array from the original
// let squares = numbers.map(square);

// //show each element of the new array with for eachn '
// squares.forEach(print)

// //apply a square using a function
// function square(element) {
//   return Math.pow(element, 2)
// }

// //print the result 
// function print(element) {
//   console.log(element);
// }

const cursos = ["HTML", "CSS", "Javascript", "PHP", "React", "Angular", "Java"];

cursos.map((el, i) => {
  console.log(`curso ${el} posicao ${i}`)
})

