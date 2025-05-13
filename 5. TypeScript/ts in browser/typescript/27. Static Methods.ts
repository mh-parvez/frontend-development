class Employee {
  static headcount: number = 0;

  constructor(
    private firstName: string,
    private lastName: string,
    private jobTitle: string
  ) {
    Employee.headcount++;
  }

  public static getHeadCount() {
    return Employee.headcount;
  }
}

console.log(Employee.headcount); // 0

let john = new Employee("John", "Doe", "Front-end Developer");
console.log(Employee.headcount); // 1

let jane = new Employee("Jane", "Doe", "Back-end Developer");
console.log(Employee.headcount); // 2

let joy = new Employee("Joy", "Doe", "Back-end Developer");
console.log(Employee.headcount); // 2

console.log("METHOD", Employee.getHeadCount());
