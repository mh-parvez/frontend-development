
// iterate 

var user = {
    name: "John",
    age: 30,
    isAdmin: true,
};

console.log(age in user);

for (const key in user) {
    console.log(user[key])
}
