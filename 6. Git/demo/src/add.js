console.log("add somthing on about file 6.33 AM");

function add(...arg) {
  return arg.reduce((acc, curr) => acc + curr, 0);
}
