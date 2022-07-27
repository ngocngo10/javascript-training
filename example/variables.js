var tester = "hey hi";
let b;
var c;
const d =2
function newFunction(x) {
  x = "hello";
  console.log(x);
  let a = 5;
}

newFunction(tester);
console.log(tester); // error: hello is not defined
// console.log(a);
console.log(b);
console.log(c);