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

// const cursos = ["HTML", "CSS", "Javascript", "PHP", "React", "Angular", "Java"];

// cursos.map((el, i) => {
//   console.log(`curso ${el} posicao ${i}`)
// })

// let elemento = document.getElementsByTagName("div");
// //use spread operator to show all the elements inside the array
// elemento = [...elemento];

// elemento.map((element, index) => {
//   element.innerHTML = "novo curso"
// })

// //innerHTML retorna apenas o conteudo das div`s

// const element = document.getElementsByTagName("div");
// const val = Array.prototype.map.call(element, ({ innerHTML }) => innerHTML)
// console.log(val)


// //converter um array de strings para number

// const converterInt = (e) => parseInt(e)
// const dobrarElementos = (e) => e*2
// let num = ['1', '2', '3', '4'].map(converterInt) 
// console.log(num)

const people = [
  { name: 'bob1', age: 20, position: 'developer' },
  { name: 'bob2', age: 30, position: 'developer2' },
  { name: 'bob3', age: 40, position: 'developer3' }
];

// it depends from what you are returning from the call back function
//with map I can return all the properties from my original array. In this case, I could return name, age and position. I can also modify the data. 
const ages = people.map(function (person) {
  return person.name + " sanders "
});

const newPeople = people.map((person) => {
  return {
    firstName: person.name.toUpperCase(),
    oldAge: person.age + 20,
    newPosition: person.position
  }
});

const names = people.map((person) => {
  return `
  <div>
  <h3>${person.name}</h3>
  <h3>${person.age}</h3>
  </div>
  `
})
console.log(newPeople);
console.log(names);

// document.body.innerHTML = names.join('')
document.body.innerHTML = names.join('')

