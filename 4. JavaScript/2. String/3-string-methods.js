
var userName = "Mehedi hasan parvez";
var sentence = "Lorem ipsum dolor sit amet sit consectetur sit adipisicing elit.";

// 1. String Modifier Methods

console.log("Hi ".concat("Welcome! ", userName));
console.log("hasan".padStart(6, "kabir "));
console.log("hasan".padEnd(12, " kabir"));
console.log("Jamil ".repeat(3));
console.log("Jamal Hasan".replace("Jamal", "Mr."));
console.log(sentence.replaceAll("sit", "XX"));
console.log(userName.slice(7, 9)); // also support negtive index
console.log(userName.split(" "));

// 2. String Info Methods

console.log("ABC".length);
console.log("lima".constructor);
console.log(userName.charCodeAt(6));
console.log(userName.charAt(4));
console.log(userName.codePointAt(4));
console.log(String.fromCharCode(78, 87, 64, 96, 77, 33));

// 3. String Formatting Methods

console.log("ABC".toLowerCase(), "xyz".toUpperCase());
console.log("  hasan".trimStart(), "hasan  ".trimEnd(), "  hasan   ".trim());

// 4. String Search Methods 

console.log(sentence.indexOf("sit"));
console.log(sentence.lastIndexOf("sit"));
console.log(sentence.includes("t"));
console.log(sentence.startsWith("Lorem"));
console.log(userName.endsWith("parvez"));
console.log(sentence.match("sit"));
console.log(sentence.search("sit"));

// All string methods reference: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String
