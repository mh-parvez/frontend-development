// Prototype-Chain: Root Object -> f() -> Person()

var Person = function () {};
console.dir(Person);

Object.prototype.salam = function () {
  console.log("Assamulaikum");
};

Person.salam();
"Parvez".salam();
