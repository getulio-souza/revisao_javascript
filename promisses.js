// tornar algo assincrono em sincrono

//uma Promise é um objeto usado para processamento assincrono
//para um valor que pode estar disponivel agora ou no futuro

//uma Promise tem três estados: pending(estado inicial), fullfield e reject (estados finais)

function contador(n) {
  let cont = 0

  for (let i = 0; i < n; i++){
    cont++
  }
  return cont
}

function contadorT(n) {
  let cont = 0
  let t = setTimeout(() => {
    for (let i = 0; i < n; i++){
      cont++
    }
  }, 2000)
  return cont
}

//uma promisse criada

function contadorP(n) {
  let cont = 0
  let p = new Promise((resolve, reject) => {
    for (let i = 0; i < n; i++){
      cont ++
    }
    //testando o resolve e reject
    if (cont == n) {
      resolve(cont)
    } else {
      reject('erro')
    }
  })
  return p
}

function somaPositivos(n1, n2) {
  let novaSoma = new Promisse((resolve, reject) => {
    if (n1 >= 0 && n2 >= 0) {
      resolve(n1 + n2)
    } else {
      reject('Houve um erro. Ambos os numeros devem ser positivos')
    }
  })
  return novaSoma
}

somaPositivos(-4, 5)
  .then(sucess => console.log(' resolvida com sucesso'))
  .catch (erro => console.log('Houve um erro. Ambos os numeros devem ser positivos'))

// contadorP(10)
//   .then(sucess => console.log('sucess'))
//   .catch(err => console.log(err))

// console.log(contadorP(10));
// console.log(contador(10))
// console.log(contadorT(10))