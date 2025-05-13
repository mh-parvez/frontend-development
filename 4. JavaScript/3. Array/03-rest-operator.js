
// Further items, aren't assigned anywhere!
let [name1, name2] = ["Julius", "Caesar", "Consul", "of the Roman Republic"];

console.log(name1); 
console.log(name2);


// Rest array of items, starting from the 3rd one
let [user1, user2, ...restUser] = ["Julius", "Caesar", "Consul", "of the Roman Republic"];

console.log(restUser)
console.log(restUser[0]);
console.log(restUser[1]);
console.log(restUser.length);


// Rest parameter of function
function sum(num1, ...rest) {
  
  console.log(num1); console.log(rest);

  return rest.reduce((p, c) => p + c);
}
console.log(sum(69,3,4,45,5,5))
