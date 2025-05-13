
const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const sliced = arr.slice(2, 5); // slice, return a new array
console.log(sliced);

const cloned = arr.slice(); // clone, return a new array
console.log(cloned);

const anoClone = [...arr]; // clone
console.log(anoClone);
