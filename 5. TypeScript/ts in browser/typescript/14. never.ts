// Typically, you use the never type to represent the return type of a function that never returns the control to the caller.
// For example, a function that always throws an error:

function raiseError(message: string): never {
  throw new Error(message);
}

type Role = "admin" | "user" | "guest";

const unknownRole = (role: never): never => {
  throw new Error(`Invalid role: ${role}`);
};

const authorize = (role: Role): string => {
  switch (role) {
    case "admin":
      return "You can do anything";
    case "user":
      return "You can do something";
    case "guest":
      return "You can do nothing";
    default:
      return unknownRole(role); // never reach here util we add a new role
  }
};

console.log(authorize("admin"));
