// you can use the 'as' keyword or <> operator for type assertions

// let el = document.querySelector('input["type="text"]');
// console.log(el.value); // Error: Property 'value' does not exist on type 'Element'.

const el = document.querySelector('input["type="text"]');
const input = el as HTMLInputElement;

console.log(input.value);

let enterdText = (el as HTMLInputElement).value; // another way

let anotherInput = <HTMLInputElement>(
  document.querySelector('input["type="text"]')
);

let price = "9.99";
// let netPrice = price as number; // error

let el2 = document.querySelector("#name");
let input2 = el as HTMLInputElement;
console.log(input.value.length);
