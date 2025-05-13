// Syntax: class ChildClass extends ParentClass {}

class DateFormatter extends Date {
  getFormattedDate() {
    const months = [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ];
    return `${this.getDate()}-${months[this.getMonth()]}-${this.getFullYear()}`;
  }
}

console.log(new DateFormatter("August 19, 1975 23:15:30").getFormattedDate());

class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  info() {
    return this.name + " " + this.age;
  }
}

class User extends Person {
  constructor(name, age, color = "red") {
    super(name, age);
    this.color = color;
  }
}

const personOne = new User("Jaman", 23, "green");
console.log(personOne);
