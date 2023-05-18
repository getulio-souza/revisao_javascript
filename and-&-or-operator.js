//example with temperature

//with && operador we had to match all the conditions

// let temp = 31;

// if(temp > 0 && temp < 30){
//  console.log('the weather is good');
// } else{
  //   console.log("the weather is bad!")
  // }
  
  

// with || we need to match only one condition 

// let temp = 18;
// let sunny = true;

// //here we are checking for more than two conditions  
// if(temp > 0 && temp <30 && sunny){
//   console.log('the weather is good')
// } else{
//   console.log('the weather is bad')  
// }

//not logical operator (!)

let temp = 15;


// here we are checking if the temperature is not greater than zero by using the not logical operator
// we put the expression in a pair of curley braces ()

if(!(temp > 0)){
  console.log("it's warn outside")
} else{
  console.log("it's cold outside");
}