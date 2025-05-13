
// remove / delete, property

var person = {
    user: "Alex",
    age: 23,
    "his skills": ["singing", "drawing", "fighting"],
};

delete person["his skills"];
delete person.age;

console.log(person.age, person["her skills"]);
console.log(person);


// comparing objects and value's

obj1 = { a: 10 };
obj2 = { a: 10 };

console.log(obj1 === obj2); // memory location are diffrent
console.log(obj1.a === obj2.a); // just cheaking value and datatype


// compound properties, when variable are keys

const key1 = "obj-key-1";
const key2 = "obj-key-2";
const key3 = "obj-key-3 outer";

const value1 = "myobj-value-1";
const value2 = "myobj-value-2";

const compoundObj = {
    [key1]: value1,
    [key2]: value2,
};

compoundObj[key3] = "outerValue";

console.log('compound-objects : ', compoundObj)


// enhance object, when key & value name are same

let bangla = 45,
    english = 67;

const secondSemester = {
    bangla,
    english,
};

function makeUser(name, age) {
    return {
        name,
        age,
    };
}

const marksPrinter = {
    print() {
        console.log("mewww");
    },
    code: () => {
        console.log('46474747')
    }
};
marksPrinter.print();
marksPrinter.code()
