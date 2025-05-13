class Person {
  ssn: string;
  firstName: string;
  lastName: string;

  constructor(ssn: string, firstName: string, lastName: string) {
    this.ssn = ssn;
    this.firstName = firstName;
    this.lastName = lastName;
  }

  getFullName(): string {
    return `${this.firstName} ${this.lastName}`;
  }
}

let person = new Person("121-34-3444", "Hasan", "Parvez");
// let person2 = new Person(384949398, "Hasan", "Parvez"); // error
console.log(person.getFullName());
