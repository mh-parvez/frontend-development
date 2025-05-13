

// NaN is a js reserved word indicating that a number is not a legal number

let x = 100 / "hello";
console.log(x);

// However, if the string is numeric, the result will be a number

let y = 100 / "10";
console.log(y);

// Cheaking NaN

console.log(isNaN(x));
console.log(isNaN(y));

// Some example

console.log(NaN + 10); // NaN
console.log(NaN + "5"); // "NaN5"
console.log(typeof NaN); // number
