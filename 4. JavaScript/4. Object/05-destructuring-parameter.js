
var person = {
    name: "jaman",
    age: 20,
    address: {
        country: "Bangladesh",
        city: "Dhaka",
    },
};

function printer({ name, age, address: { country, city } }) {

    console.log(name, age, country, city);
}
printer(person);

