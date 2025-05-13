class ClassWithField {
  instanceField;
  instanceFieldWithInitializer = "instance field";
  static staticField;
  static staticFieldWithInitializer = "static field";
}

console.log(ClassWithField.instanceFieldWithInitializer);
console.log(ClassWithField.staticFieldWithInitializer);
