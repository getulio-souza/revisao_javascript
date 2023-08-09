import { readFile } from 'fs';
//callback - promisse - async/await

//callback


console.log(1)

//uma funcao callback tem dois parametros, sendo o primeiro para erros e o segundo o conteudo do arquivo que sera lido
const callBack =  (err, contents) => {
  console.log(err,contents)
}

//toda vez que um arquivo termina de ler, ele chama de volta uma funcao que eh passada para ele
readFile('./file1.txt', callBack )

console.log(2)
console.log(3)


//promise


//async-await 