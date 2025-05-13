/*

* throw - defines a custom error
* try - define a code block to run
* catch - handling any error
* finally - run regardless of the result

*/

const student = {
  name: "",
  id: 7728272,
  dept: "Bangla",
};

try {
  if (!student["name"]) {
    throw "name was missing";

  } else if (!student["id"]) {
    throw "id was missing";

  } else if (!student["dept"]) {
    throw "dept was missing";

  } else {
    console.log("student data added successfully!");
  }
} catch (error) {
  console.log(error);

} finally {
  console.log("try again");
}
