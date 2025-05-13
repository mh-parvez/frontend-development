const max = 100;
let counter = 0;

if (counter < max) {
  counter++;
}

if (counter < max) {
  counter++;
} else {
  counter = 1;
}

counter < max ? counter++ : (counter = 1);

let discount: number;
let itemCount = 11;

if (itemCount > 0 && itemCount <= 5) {
  discount = 5; // 5% discount
} else if (itemCount > 5 && itemCount <= 10) {
  discount = 10; // 10% discount
} else {
  discount = 15; // 15%
}

console.log(`You got ${discount}% discount. `);
