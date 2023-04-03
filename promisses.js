// tornar algo assincrono em sincrono

//uma Promise é um objeto usado para processo assincrono para um valor que pode estar disponivel agora ou no futuro

//uma Promise tem três estados: fullfield, reject e

// function contador1(n) {
//   let cont = 0;
//   for (let i = 0; i < n; i++) {
//     contador1++;
//   }
// }

// function contador2(n) {
//   let contador = 0;
//   let t = setTimeout(() => {
//     for (let i = 0; i < n; i++) {
//       contador++;
//     }
//   }, 2000);
//   return contador;
// }

// function contarP(n) {
//   let cont = 0;
//   let p = new Promise((resolve, rejected) => {
//     for (let i = 0; i < n; i++) {
//       cont++;
//     }
//     if (cont == n) {
//       resolve(cont, 'deu certo');
//     } else {
//       rejected("houve um erro. Tente novamente mais tarde.");
//     }
//   });
//   return p;
// }
// console.log(contarP(10));
// contarP()
//   //se deu certo 
//   .then(sucess => console.log('sucess' + sucess))
//   //se deu erro
//   .catch(error => console.log(error))

// console.log(contador1(1000));
// console.log(contador2(10));


// function somaPositivos (n1, n2){
//   let p = new Promise((res, rej)=> {
//     if( n1 >= 0 && n2>= 0){
//       res(n1+n2)
//     }
//     else{
//       rej('erro')
//     }
//   })
//   return p;
// }

// somaPositivos(1,1)
// .then(sucess => console.log('sucess ' + sucess))
// .catch(error => console.log(error))

const myPromise = new Promise ((res, rej)=> {
  setTimeout (()=> rej('resolvida'), 2000)
})

myPromise
.then((res)=> console.log(`ok, a sua promise foi ${res}`))
.catch((rej)=> console.log(`erro, a sua promisse foi ${rej}`))



// const p = new Promise ((resolve, reject)=> {
//   try{
//     resolve(funcaox())
//   } catch (e){
//     reject(e)
//   }
// })

//https://medium.com/trainingcenter/entendendo-promises-de-uma-vez-por-todas-32442ec725c2