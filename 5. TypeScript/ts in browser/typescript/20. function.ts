function add(a: number, b: number): number {
  return a + b;
}

console.log(add(345, 456));

function echo(message: string): void {
  console.log(message.toUpperCase());
}

// 🔰 function type: (parameter: type, parameter:type,...) => type
let sub: (a: number, b: number) => number;
sub = function (a: number, b: number) {
  return a - b;
};

let mul: (x: number, y: number) => number = function (x: number, y: number) {
  return x * y;
};

// 🔰 optional parameter
function multiply(a: number, b: number, c?: number): number {
  if (typeof c !== "undefined") {
    return a * b * c;
  }
  return a * b;
}

// 🔰 default parameter
function applyDiscount(price: number, discount: number = 0.05): number {
  return price * (1 - discount);
}

console.log(applyDiscount(100)); // 95

// ❌ let promotion: (price: number, discount: number = 0.05) => number;
//                                   ````````````````````````

// 🔰 rest parameter
function getTotal(...numbers: number[]): number {
  return numbers.reduce((acc, curr) => acc + curr, 0);
}

console.log(getTotal(1, 3, 4));
