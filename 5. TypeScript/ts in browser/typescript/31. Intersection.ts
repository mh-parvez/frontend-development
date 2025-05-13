interface BusinessPartner {
  name: string;
  credit: number;
}

interface Identity {
  id: number;
  name: string;
}

interface Contact {
  email: string;
  phone: string;
}

type Employee = Identity & Contact;
type Customer = BusinessPartner & Contact;

let e: Employee = {
  id: 100100100,
  name: "Hasan kabir",
  email: "kabir@gmail.com",
  phone: "(408)-897-5684",
};
