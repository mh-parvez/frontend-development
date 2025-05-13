/*
function prop<T, K>(obj: T, key: K) {
  return obj[key]; // error: Type 'K' cannot be used to index type 'T'
}
*/

// add a constraint to K to ensure that it is a key of T
function prop<T, K extends keyof T>(obj: T, key: K) {
  return obj[key];
}

let str = prop({ name: "hasan" }, "name");
console.log(str);
