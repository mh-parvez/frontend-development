
let person = {
    name: "jaman",
    age: 20,

    address: {
        country: 'Bangladesh',
        city: "Dhaka",
    },
};

// Type's of object destucturing

let { age } = person
let { age: personAge } = person; // changing the name
let { address: { city } } = person; // nested distructring
let { name: userName = 'empty input', address: { country = 'empty input' } } = person; // default value

console.log(userName, country);
