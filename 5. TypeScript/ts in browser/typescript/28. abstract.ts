/*
✅ Abstract Class:

Interface
1) All memeber are abstract
2) Interface support multiple inheritance

Abstract
1) Some member are abstract and some are fully implemented
2) Abstract class does not support multiple inhertance
3) We cannot create an inthertance of an abstract class
*/

abstract class Emplyee {
  constructor(private firstName: string, private lastName: string) {}
  abstract getSalary(): number;

  get fullName(): string {
    return `${this.firstName} ${this.lastName}`;
  }

  compensationSatement(): string {
    return `${this.firstName} makes ${this.getSalary()} a month`;
  }
}

// let emplyeeOne = new Emplyee() // cannot create object with abstrac class

class FullTimeEmployee extends Emplyee {
  constructor(firstName: string, lastName: string, private salary: number) {
    super(firstName, lastName);
  }

  getSalary(): number {
    return this.salary;
  }
}

let emplyeeOne = new FullTimeEmployee("Hasan", "Jamil", 90000);
console.log(emplyeeOne);
console.log(emplyeeOne.compensationSatement());
console.log(emplyeeOne.getSalary());
console.log(emplyeeOne.fullName);
