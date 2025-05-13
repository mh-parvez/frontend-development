
let id1 = Symbol(26266262);
let id2 = Symbol(26266262);

console.log(id1 == id2) //false
console.log(id1.description == id2.description) //true


// we can't access Symbol() outside from the object

let user = {
  name: "John",
  [Symbol('__bank_id')]: 'Xi4i4Kanau&A'
};

console.log(user.name)
// task access the bank id?

