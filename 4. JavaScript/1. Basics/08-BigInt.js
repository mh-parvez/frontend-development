

let x = 1234567890123456789012345n;
let y = BigInt(1234567890123456789012345)

console.log(x)
console.log(y)
console.log(typeof y)

let a = 5n;
// let b = x / 2;
// Error: Cannot mix BigInt and other types, use explicit conversion.

let m = 5n;
let n = Number(x) / 2;

let q = Number.MAX_SAFE_INTEGER;
let r = Number.MIN_SAFE_INTEGER;

console.log(q);
console.log(r);

Number.isInteger(10);
Number.isInteger(10.5);

Number.isSafeInteger(10);
Number.isSafeInteger(12345678901234567890);
