

let x = 10;
let y = 50.5;

const a = 123e5;
const b = 123e-5;

console.log(a, b);

// adding numbers and string 🚀

const num = 100;
const str = "10";

console.log(num + str); // 10010
console.log(str + num); // 10100

// What the hack?, actually ❓

// Javascipt string can have numberic content, javascript will try to convert string to numbers in all numberic operations.

let s1 = "200";
let s2 = "100";

console.log(s1 / s2); // 2
console.log(s1 * s2); // 20000
console.log(s1 - s2); // 100
console.log(s1 + s2); // 200100 (concat);

// Infinity

console.log(2 / 0);
console.log(-2 / 0);
console.log(typeof Infinity);

// Others number system in js - hex, decimel, octal, binary

let myNumber = 32;
console.log(myNumber.toString(32));
console.log(myNumber.toString(16)); 
console.log(myNumber.toString(12)); 
console.log(myNumber.toString(10)); 
console.log(myNumber.toString(8)); 
console.log(myNumber.toString(2));


// Number objects

const n = new Number(77);
const m = new Number(77);

console.log(typeof n); // object
console.log( n === m); // cause reference are different


// The toString() method returns a number as a string.

(123).toString();


// They return number
Number(true); 
Number(false);
Number("10");
Number("  10");
Number("10  ");
Number(" 10  ");
Number("10.33");

// They return NaN
Number("10,33");
Number("10 33");
Number("John");

// parseInt() & parseFloat() parses a string and returns a whole number. Spaces are allowed. Only the first number is returned:
parseInt("-10");
parseInt("-10.33");
parseInt("10");
parseInt("10.33");
parseInt("10 20 30");
parseInt("10 years");
parseInt("years 10");

Number.isInteger(10);
Number.isInteger(10.5);