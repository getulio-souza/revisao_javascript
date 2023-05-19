//counter to 10

// for (let counter = 1; counter <=10; counter +=1){
//   console.log(counter)
// }

// for (let counter = 60; counter > 0; counter -=1){
//   console.log(counter);
// }
// console.log("happy new year")


//when we use a if statement inside a for loop with the word 'break', we stop the counting in that number 
//if not, the counter will continue normally 
// for (let i = 1; i <=20; i+=1){
//   if( i == 13) {
//     break;
//   }
//   console.log(i)
// }

//nested loops 

// for (let i = 1; i <=5; i +=1){
//   for(let j = 1; j <=5; j +=1){
//     console.log(j);
//   }
// }

//draw a rectangle 

// let symbol = window.prompt("Enter a symbol to use")
// let rows = window.prompt('Enter # of rows');
// let columns = window.prompt('Enter # of columns')

// for (let i = 1; i<=rows; i+=1){
//   for(let j = 1; j <= columns; j++){
//     document.getElementById("myRectangle").innerHTML +=j
//   }
//   document.getElementById("myRectangle").innerHTML += "<br>"
// }