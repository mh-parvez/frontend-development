
let x = null;

x = Math.round(69.68);
x = Math.ceil(69.68);
x = Math.floor(69.68);
x = Math.trunc(69.68); // int part

Math.sqrt();
Math.abs(); // abs positive value

Math.min(30, 0, 7, -3);
Math.max(30, 0, 7, -3);

Math.random();

console.log(x);

// proper math function

function getRandomInteger(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}

console.log(getRandomInteger(10, 20));

// threre are lot's of js math function
