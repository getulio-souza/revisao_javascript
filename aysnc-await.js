//synchronous
// console.log("I");
// console.log("eat");
// console.log("with a");
// console.log("spoon");

//javascript runs from the top to the bottom of the page

//asynchronous

//settimeout allows you to run a fuction after a specific amount of time

// setTimeout(()=> {
//   console.log("ice cream");
// }, 4000)

//call a function inside another function === call back function

// function one (call_two){
//   console.log('step 1 complete, please call step 2')

//   call_two()

// };

// function two (){
//   console.log('step 2')
// };

// one(two);

//flow of a synscronns function

//store the ingredients

let stocks = {
  fruits: ["strawberry", "banana", "grapes", "apple"],

  liquid: ["water", "ice"],

  holder: ["cone", "cup", "stick"],

  toppings: ["chocolate", "peanuts"],
};

stocks.fruits[2];

// console.log(stocks.fruits[1]);

let order = (fruit_name, call_production) => {
  console.log("order placed, please call production");

  setTimeout(() => {
    console.log(`${stocks.fruits[fruit_name]} was selected`);
  }, 2000);

  call_production();
};

order(0, production);

let production = () => {

  setTimeout(()=> {
    console.log("production has started");
  },2000)

  console.log("order received, starting production");
};
