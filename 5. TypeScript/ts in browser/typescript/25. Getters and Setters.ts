class Person {
  private _age: number;
  private _firstName: string;
  private _lastName: string;

  constructor(age: number, firstName: string, lastName: string) {
    this._age = age;
    this._firstName = firstName;
    this._lastName = lastName;
  }

  public get age() {
    return this._age;
  }

  public set age(theAge: number) {
    if (theAge <= 0 || theAge >= 100) {
      throw new Error("The age is Invaild!");
    }

    this._age = theAge;
  }

  public get firstName() {
    return this._firstName;
  }

  public set firstName(theFirstName: string) {
    if (!theFirstName) {
      throw new Error("Invalid firstname");
    }
    this._firstName = theFirstName;
  }

  public get lastName() {
    return this._lastName;
  }

  public set lastName(theLastName: string) {
    if (!theLastName) {
      throw new Error("Invaild lastName");
    }

    this._lastName = theLastName;
  }

  public get fullName() {
    return `${this.firstName} ${this.lastName}`;
  }

  public set fullName(name: string) {
    let parts = name.split(" ");
    if (parts.length != 2) {
      throw new Error("Invalid name format: first last");
    }
    this.firstName = parts[0];
    this.lastName = parts[1];
  }
}

let person = new Person(22, "Hasan", "Ahmed");

person.age = 40;
person.firstName = "Kabir";
person.lastName = "Ahmed";
person.fullName = "Jaman Jamil";

console.log(person.firstName);
console.log(person.lastName);
console.log(person.age);
console.log(person.fullName);
