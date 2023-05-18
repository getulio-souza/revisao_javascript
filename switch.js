// let grade = "A"

// switch(grade){
//   case "A":
//     console.log("You did great");
//     break;
  
//   case "B":
//     console.log("You did good")
//     break;

//   case "c":
//     console.log("You did okay");
//     break;

//   //if you don't have a match, you can display a "default" clause
//   default:
//     console.log(grade, 'is not a letter grade')
// }

let grade = 80;

//if the switch is true 
//now we are using conditions with the switch statement 
switch(true){
  case grade >= 90:
    console.log("You did great");
    break;
  
    case grade >= 80:
    console.log("You did good")
    break;

    case grade >= 70:
    console.log("You did okay");
    break;

  //if you don't have a match, you can display a "default" clause
  default:
    console.log(grade, 'is not a letter grade')
}