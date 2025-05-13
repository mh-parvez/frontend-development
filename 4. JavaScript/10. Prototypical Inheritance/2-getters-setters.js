
// We want to add a fullName property, that should be "John Smith".

let user = {
    name: "John",
    surname: "Smith",

    get fullName() {
        return `${this.name} ${this.surname}`;
    },

    set fullName(value) {
        [this.name, this.surname] = value.split(" ");
    },
};

console.log(user.fullName); // John Smith
user.fullName = "Test"; // Error (property has only a getter)

user.fullName = "Alice Cooper"; // set fullName is executed with the given value
console.log(user.name); // Alice
console.log(user.surname); // Cooper
