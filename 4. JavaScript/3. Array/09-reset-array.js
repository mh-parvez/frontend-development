
// reset, example 1

let x = [1, 2, 3];

let y = x; // copy

x = [];

console.log(x, y); // not-reset, properly


// reset, example 2

let a = [1, 2, 3];

let b = a;

a.length = 0;

console.log(a, b); // reset, properly


// reset, example 3

let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

while (numbers.length) {

  // reset proerly, using while loop
  numbers.pop();

}

console.log(numbers);
