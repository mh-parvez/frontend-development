
let color: [number, number, number] = [255, 0, 0];

let bgColor, headerColor: [number, number, number, number?]; // optional tuple value
bgColor = [0, 255, 255, 0.5];
headerColor = [0, 255, 255];

const bgColorNew = bgColor.map((color) => color + 10);
console.log(bgColor);
console.log(bgColorNew);
