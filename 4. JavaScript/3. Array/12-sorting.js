
// Example 1 : sorting array

var arr = [4, 6, -6, 2, 95, 7, -7, 3, 5];

arr.sort((a, b) => a - b); // vise-versa

console.log(arr);


// Example 2 : sorting array of object

var persons = [
    { name: "z", age: 22 },
    { name: "d", age: 18 },
    { name: "f", age: 21 },
    { name: "a", age: 19 },
];

persons.sort((a, b) => a.age - b.age);

console.log(persons);


persons.sort(function (a, b) {
    
    if (a.age > b.age) return 1;
    else if (a.age < b.age) return -1;
    else return 0;

});

console.log(persons);


persons.sort(function (a, b) {
    
    if (a.age > b.age) return -1;
    else if (a.age < b.age) return 1;
    else return 0;

});
console.log(persons);


const cars = [
    { type: "Volvo", year: 2016 },
    { type: "Saab", year: 2001 },
    { type: "BMW", year: 2010 },
];

cars.sort((a, b) => a.year - b.year); //sorting by year

console.log(cars);


cars.sort((a, b) => {

    //sorting by type
    let x = a.type.toLowerCase();
    let y = b.type.toLowerCase();

    if (x < y) return -1;
    if (x > y) return 1;

    return 0;

});

console.log(cars);
