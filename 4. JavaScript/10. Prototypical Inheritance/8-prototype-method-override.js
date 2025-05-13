
const array = new Array();
array.push(10);

console.log(array);
console.log(Array.prototype);

Array.prototype.printName = function (name) {
  console.log("my name is", name);
};

array.printName("kabir");

String.prototype.greet = function (string) {
  console.log("👋🏻", string);
};

var user = 'alex'
user.greet(user);