export interface Validator {
  isValid(s: string): boolean;
}

interface Validator2 {
  isValid(s: string): boolean;
}

export { Validator2 };

interface Validator3 {
  isValid(s: string): boolean;
}

export { Validator3 as StringValidator };

class ZipCodeValidator implements Validator {
  isValid(s: string): boolean {
    const numberRegxp = /^[0-9]+$/;
    return s.length == 5 && numberRegxp.test(s);
  }
}

export { ZipCodeValidator };
