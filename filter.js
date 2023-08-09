//filter - creates a new array with all elements that pass the test provided by a function

let ages = [14, 27, 34, 57, 62];
let adults = ages.filter(checkAge);

//display the elements with for each
adults.forEach(printElements);

//callback function to check the ages
function checkAge (element) {
  return element >= 18
}

function printElements (element) {
  console.log(element)
}

