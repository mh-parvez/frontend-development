
var fruits = {
    apple: "🍎",
    banana: "🍌",
};

// object to array
const fruitsArray = Object.entries(fruits)
console.log('fruitsArray: ', fruitsArray)

// array to object
const fruitsObjectAgain = Object.fromEntries(fruitsArray)
console.log('fruitsObjectAgain: ',fruitsObjectAgain)
