
const myArr = [
	[1, 2],
	[10, 20],
	[100, 200],
];

console.log(myArr.flat());

const myArr2 = [
	[1, 2],
	[10, 20, [69, 96]],
	[100, 200],
];

console.log(myArr2.flat(2)); //depth


const arr = [[1, 2], [5], 8, [1, 69, 90]];

const newArr = arr.flatMap((el) => {
	return el;
});

console.log(newArr);
