
// Original
let arr = [1, 2, 3, 4, 5, 6, 7, 8];

// const reversArray = arr.reverse(); // mutable
const reversArray = arr.toReversed(); // immutable

console.log(reversArray);
console.log(arr);
