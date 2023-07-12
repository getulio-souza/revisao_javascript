//Array.forEach() = executes a provided callback function once for each array element

// let students = ["student 1", "student 2", "student 3"];
// students.forEach(capitalize);
// students.forEach(print)

// //essa funcao eh uma call back function 
// function capitalize(element, index, array) {
//   array[index] = element[0].toUpperCase() + element.substring(1)
// }

// console.log(students[2]);

// function print(element) {
//   console.log(element)
// }

// const meuNomeCompleto = [{ nome: 'Fulano' }, { nome: 'da' }, { nome: 'Silva' }];

// meuNomeCompleto.forEach((element, index, array) => {
//   console.log(element.nome)
// })

//o forEach recebe como parametro uma funcao que pode ser uma arrow function ou uma funcao normal com tres parametros.

//O primeiro é o elemento, ou seja, o primeiro item; o segundo o indexn(posicao do elemnto dentro do array) e o terceiro o proprio array

//manipula os elementos de um array

//https://blog.betrybe.com/javascript/javascript-foreach/

// meuNomeCompleto.forEach((umaParteDoNome, posicao) => {
//   console.log(`a parte ${umaParteDoNome.nome} esta na ${posicao}`)
// })


// const numbers = [1,2,3,4,5,6];

// function verificarPares(element, index) {
//   if (element % 2 == 0) {
//     console.log(element, index)
//   }
  
// }

// numbers.forEach(verificarPares)


// const numbers2 = [1, 2, 3, 4, 5, 6]
// numbers.forEach((element, index) => {
//   console.log(numbers[index])
// }) 

const numbers3 = [1, 2, 3, 4, 5, 6, 7]
numbers3.forEach(numero => {
  if (numero % 2 == 0) {
    console.log(numero)
  }
})