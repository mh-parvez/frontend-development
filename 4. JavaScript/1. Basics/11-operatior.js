

// === (triple equals)
// note: it will check data also
console.log(10 == "10");
console.log(10 === "10");
console.log("2" > "12"); // first later will comparing

// ?? (nullish coalesing)
//note: the ?? opreator returns the first argument if it is not nullish (null or undefined)

let username = null;
username = "parvez";
let warrring = "missing";

let message = `The name is -> ${username ?? warrring}`;

console.log(message);


// The important difference between them is that:
// || returns the first truthy value.
// ?? returns the first defined value.
// Documentation Link: https://javascript.info/nullish-coalescing-operator
let height = 0;
console.log(height || 100); // 100
console.log(height ?? 100); // 0


// ?. (optional chaining)
// note: opeator returns undefined if an objects is undefined or null (instead of thowing error)

const student = {
  name: "jahan",
  id: "778383683",
  dept: "CSE",
  batch: 58,
};

console.log(student?.batch);
console.log(student.section);
console.log(student?.section);
