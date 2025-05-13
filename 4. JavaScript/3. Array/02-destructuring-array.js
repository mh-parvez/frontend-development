
// Destructuring create an normal variable

// Example: 1
let fruits = ["mango", "banana", "guava", "cocunut"];

let [mango, banana] = fruits;
console.log(mango, banana);

let [, , guava, cocunut] = fruits;
console.log(guava, cocunut);


// Example: 2
let numbers = [1, 2, 3, [100, 200, 500], 4, 5];

let [, , a, [, b], , c] = numbers;
console.log(a, b, c);


// Destructuring swap
var x = 10;
var y = 20;

[y, x] = [x, y]

console.log(x, y);
