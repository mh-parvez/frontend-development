// object type
type Person = {
  name: string;
  age: number;
};

let perosn: Person = {
  name: "Hoq",
  age: 34,
};

// union type
type alphanumeric = string | number;
let input: alphanumeric = 100;

// intesection type
type Personal = {
  name: string;
  age: number;
};

type Contact = {
  email: string;
  phone: string;
};

type Candidate = Personal & Contact;

let candidate: Candidate = {
  name: "Hoq",
  age: 23,
  email: "hoq@gmail.com",
  phone: "(4008)-2323-3242",
};

console.log(candidate);
