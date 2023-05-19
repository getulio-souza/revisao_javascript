//template literals = allows embedded variables and expressions

// let userName = "fkdsjl"
// let items = 3;
// let total = 75;

// console.log(`hello ${userName}`);
// console.log(`you have ${items} items in your cart`)
// console.log(`your total is ${total}`)

//using template literals to display a very long string

let userName = "fkdsjl"
let items = 3;
let total = 75;

let text = 
`hello ${userName}<br>
you have ${items} items in your cart<br>
your total is ${total};
`;

console.log(text);

document.getElementById("myLabel").innerHTML = text;