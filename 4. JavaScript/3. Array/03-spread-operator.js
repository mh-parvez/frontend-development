
// ...Spread, opeator in arrays

// Example 1
const hobbis = { ...["read", "write", "sleep", "repeat"]};

console.log(...["read", "write", "sleep", "repeat"]);
console.log(["read", "write", "sleep", [..."repeat"]]);
console.log(["read", "write", "sleep", ...[..."repeat"]]);

// Example 2
let arr1 = [1, -2, 3, 4], arr2 = [8, 3, -8, 1];

console.log(Math.min(...[75, 85, 9]));
console.log(Math.max(...arr1, ...arr2)); 
console.log(Math.min(1, ...arr1, 2, ...arr2, 25));

// Example 3
let merged = [0, ...arr, 2, ...arr2];
console.log(merged); // 0,3,5,1,2,8,9,15 (0, then arr, then 2, then arr2)

let str = "hello";
console.log([...str]); // h,e,l,l,o

let arrCopy = [...arr]; 
console.log(arr === arrCopy); // false (not same reference)

// Example 4
let teacher = {
  name: "kabir",
  dept: "civil",
};

let teacher2 = { ...teacher };
teacher2.name = "shadik";

// Example 5
let allTeachers = {
  ...teacher,
  teacher2,
};

// Example 6
const userName = {
  ..."write", // indexs are key, alphabets are values
};