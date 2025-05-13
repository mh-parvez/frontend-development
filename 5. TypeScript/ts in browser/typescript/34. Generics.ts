// DIFFRENT FUNCITON, SAME TASK

let numbers = [1, 5, 7, 4, 2, 9];

function getRandomNumberElement(items: number[]): number {
  let randomIndex = Math.floor(Math.random() * items.length);
  return items[randomIndex];
}

console.log(getRandomNumberElement(numbers));
console.log(getRandomNumberElement(numbers));
console.log(getRandomNumberElement(numbers));
console.log(getRandomNumberElement(numbers));

let colors = ["red", "green", "blue"];

function getRandomStringElement(items: string[]): string {
  let randomIndex = Math.floor(Math.random() * items.length);
  return items[randomIndex];
}

console.log(getRandomStringElement(colors));
console.log(getRandomStringElement(colors));
console.log(getRandomStringElement(colors));
console.log(getRandomStringElement(colors));

// ☝🏻 SOLUTION 1: Using any type

function getRandomAnyElement(items: any[]): any {
  let randomIndex = Math.floor(Math.random() * items.length);
  return items[randomIndex];
}

console.log(getRandomAnyElement(numbers));
console.log(getRandomAnyElement(colors));

// ✌🏻 SOLUTION 2: Using generics

function getRandomElement<T>(items: T[]): T {
  let randomIndex = Math.floor(Math.random() * items.length);
  return items[randomIndex];
}

let randomEle = getRandomElement(numbers);
let randomColor = getRandomElement(colors);

console.log("Generics: ", randomEle);
console.log("Generics: ", randomColor);

function merge<U, V>(obj1: U, obj2: V) {
  return {
    ...obj1,
    ...obj2,
  };
}

const result = merge({ name: "Jhon" }, { jobTitle: "Frontend Developer" });
console.log(result);
