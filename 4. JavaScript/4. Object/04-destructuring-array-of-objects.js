
let users = [
  { id: 1, name: "ABA", gender: "m" },
  { id: 5, name: "BAB", gender: "f" },
  { id: 9, name: "CAC", gender: "m" },
];

let [{ id }, { name: username }, { gender }] = users; // values are different objcets
console.log(id, username, gender);
