// @ explicit binding

var person = {
  name: "Sakib",
  age: 23,
};

var printName1 = function (profession, nationality) {
  console.log(this.name, this.age, profession, nationality);
};

printName1.call(person, "male", "bangladeshi");

var printName2 = function (profession, nationality) {
  console.log(this.name, this.age, profession, nationality);
};

printName2.apply(person, ["male", "bangladeshi"]);

var printName3 = function (profession, nationality) {
  console.log(this.name, this.age, profession, nationality);
};
const sotreForUsingLater = printName3.bind(person, "male", "bangladesi"); //bind return function reference

console.log(sotreForUsingLater());
