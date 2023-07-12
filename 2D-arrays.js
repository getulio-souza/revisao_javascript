// 2D array - an array of arrays

let fruits = ["apples", "oranges", "bananas"];
let vegetables = ["carrots", "onions", "potatoes"];
let meat = ["eggs", "chicken", "fish"];

let groceryList = [fruits, vegetables, meat];

//to access the index of two dimensional array
groceryList[0][0] = "11111"

//nested loop
for (let list of groceryList) {
  for (let food of list) {
    console.log(food)
  }
}