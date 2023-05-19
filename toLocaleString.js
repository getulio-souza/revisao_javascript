let myValue = 123456.789

myValue = myValue.toLocaleString("us-US", {style: 'currency', currency: "USD"});

console.log(myValue)