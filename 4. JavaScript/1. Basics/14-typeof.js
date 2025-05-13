

// Primitive data types. -> string, number, boolean, bigInt, symbol, null, undefined

console.log(typeof "")
console.log(typeof 49)
console.log(typeof 60n)
console.log(typeof false)
console.log(typeof Symbol())

console.log(typeof null) //object, cause of bug
console.log(typeof undefined)


// Compelex data types 'or non-primative data types. -> object, function

console.log(typeof {})
console.log(typeof new Map())
console.log(typeof function () {}) // funciton
