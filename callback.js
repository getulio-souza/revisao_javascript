
import fs from 'fs';
// callback - a function passed as an argument

// let total = sum(2, 3);
// // displayConsole(total);
// displayDOM(total)

// function sum(x, y) {
//   let result = x + y;
//   return result
// }

// //displaying the result on consule
// function displayConsole(output) {
//   console.log(output)
// }

// //displaying the result on DOM
// function displayDOM(output) {
//   document.getElementById("myLabel").innerHTML = output
// }


// const btn = document.getElementById("myBtn")

// btn.addEventListener('click', () => {
//   let name = "getulio"
//   console.log(name.toLowerCase())
// })


function exibirMensagemNaOrdem(mensagem, callback) {
  console.log(mensagem);
  callback()
}

exibirMensagemNaOrdem('essa eh a primeira mensagem', () => {
  console.log('essa eh a segunda mensagem');
})


var fs = require('fs')
console.log('primeiro comando');
fs.readFile('./arquivo.txt', callback)

function callback(err, conteudo) {
  if (err) 
    return console.error(err)
    console.log(String(conteudo));
  
  console.log("segundo comando");
  console.log("primeiro comando");
}