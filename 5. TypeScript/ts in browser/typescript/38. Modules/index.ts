// 🔗 https://www.typescripttutorial.net/typescript-tutorial/typescript-modules/

import { Validator } from "./validatior";
import { Validator2 } from "./validatior";
import { StringValidator as Validator3 } from "./validatior";
import { EmailValidator } from "./validEmail";
import { alphanumeric } from "./Types";
import emailuser from "./Types";

const valid: Validator = {
  isValid(s: string): boolean {
    return true;
  },
};

const valid2: Validator2 = {
  isValid(s: string): boolean {
    return true;
  },
};

const valid3: Validator3 = {
  isValid(s: string): boolean {
    return true;
  },
};

console.log(valid.isValid("llo"));
console.log(valid2.isValid("olo"));
console.log(valid3.isValid("oll"));

let email = "john.doe@typescripttutorial.net";
let validator = new EmailValidator();
let result = validator.isValid(email);

console.log(result);

const char: alphanumeric = "C";

console.log(emailuser);
console.log(char);
