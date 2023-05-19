//ternary operator - shortcut for an 'if/else statement'
//condition ? exprIfTrue : exprIfFalse

let adult = checkAge(21);
console.log(adult);

function checkAge(age){
  return age >= 18 ? true: false 
}

//function returned 
checkWinner(true)

function checkWinner(win){
  //win here is used as a boolean value
  win ? console.log('you win') : console.log('you lose')
}