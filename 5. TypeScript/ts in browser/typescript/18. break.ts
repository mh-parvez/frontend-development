let products = [
  { name: "phone", price: 700 },
  { name: "tablet", price: 900 },
  { name: "laptop", price: 1200 },
];

for (var i = 0; i < products.length; i++) {
  if (products[i].price == 900) break;
}

console.log(products[i]); // show the products
