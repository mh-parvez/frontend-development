interface Person {
  firstName: string;
  lastName: string;
  readonly ssn: string;
}

/*
  function getFullName(person: Person) {
    return `${person.firstName} ${person.lastName}`;
  }
*/

function getFullName({ firstName, lastName, ssn }: Person) {
  return `${firstName} ${lastName}`;
}

let john: Person = {
  firstName: "John",
  lastName: "Doe",
  ssn: "171-28-0926",
};

// person.ssn = "171-28-0000"; // readonly property
console.log(getFullName(john));

interface StringFormate {
  (str: string, isUpper: boolean): string;
}

let formate: StringFormate;

formate = function (str: string, isUpper: boolean) {
  return isUpper ? str.toLocaleUpperCase() : str.toLocaleLowerCase();
};

console.log(formate("Hello world!", true));

interface Json {
  toJson(): string;
}

class Student implements Json {
  constructor(private fname: string, private lname: string) {}

  toJson(): string {
    return JSON.stringify(this);
  }
}

const student = new Student("Parvez", "Ahmed").toJson();
console.log(student);
