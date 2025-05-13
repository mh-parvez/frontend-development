
// Optional-chaining: The optional chaining ?. is a safe way to access nested object properties, even if an intermediate property doesn’t exist.


// 🥦 Example: 1

var user = {}; // user without "address" property

// console.log(user.address.street); // error!
console.log(user?.address?.street); // undefined (no error)


// 🥦 Example: 2

// var html = document.querySelector(".element").innerHTML; // error if it's null
var html = document.querySelector(".elem")?.innerHTML; // will be undefined, if there's no elements


// 🥦 Example: 3

let user = null;
// console.log(user?.address); // undefined
// console.log(user?.address.street); // undefined
