// Traditional Anonymous Function
function Tinh(b){
  return b + 100;
}
console.log(Tinh(1));

// Arrow Function Break Down
// 1. Remove the word "function" and place arrow between the argument and opening body bracket
(a) => {
  return a + 100;
}

// 2. Remove the body braces and word "return" -- the return is implied.
(a) => a + 100;

// 3. Remove the argument parentheses
var kq = a => a + 100;

// Traditional Anonymous Function
var sum = function (a, b){
  return a + b + 100;
}

// Arrow Function
var kq1 = (a, b) => a + b + 100;

// Traditional Anonymous Function (no arguments)
let a = 4;
let b = 2;
var sum = function (a, b){
  return a + b + 100;
}

// Arrow Function (no arguments)
let c = 4;
let d = 2;
() => a + b + 100;

// Traditional Anonymous Function
const kq1= function (c, d){
  let chuck = 42;
  return a + b + chuck;
}


// Arrow Function
const kq2 = (a, b) => {
  let chuck = 42;
  return a + b + chuck;
}

// Traditional Function
let bob1 = function bob (a){
  return a + 100;
}

// Arrow Function
let bob2 = a => a + 100;



