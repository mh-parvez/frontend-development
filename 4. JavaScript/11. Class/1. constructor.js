class Rectangle {
  constructor(height, width) {
    this.height = height;
    this.width = width;
  }

  area() {
    return this.height * this.width;
  }
}

const rect = new Rectangle(40, 34);

/*
class ValidationError extends Error {
  printCustomerMessage() {
    return `Validation failed :- ${this.message}`;
  }
}

try {
  throw new ValidationError("Not a valid phone number");
} catch (error) {
  if (error instanceof ValidationError) {
    console.log(error.name);
    console.log(error.printCustomerMessage());
  } else {
    console.log("Unknown error", error);
    throw error;
  }
}
*/

class ValidationError extends Error {
  constructor(message) {
    super(message);
    this.name = "ValidationError";
    this.code = "42";
  }

  printCustomMessage() {
    return `Validation failed:- (details: ${this.message}, code: ${this.code})`;
  }
}

try {
  throw new ValidationError("Not a valid phone number");
} catch (error) {
  if (error instanceof ValidationError) {
    console.log(error.name);
    console.log(error.printCustomMessage());
  } else {
    console.log("Unknown error", error);
    throw error;
  }
}
