//reduce - reduce an array to a single value


//create an array
let prices = [3, 6, 8, 10, 15, 29,12];

//create another array to apply the reduce method and call the callback function as a argument
let total = prices.reduce(checkOut)

//display the result in the console 
console.log(`the total is ${total}`);

//our callback function
function checkOut(total, element) {
  return total + element;
}


//testing with money
let money = [1, 2, 3, 4]

let allMoney = money.reduce(checkMoney);

console.log(`the amount of money is ${allMoney}`);

function checkMoney(x, y){
  return x + y;
}


