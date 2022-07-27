// program to display text 5 times
const n = 5;
// looping from i = 1 to 5
// In below example you can't use const because the value of variable is modified by increment one until the condition is false.
for (let i = 1; i <= n; i++) {
  console.log(`I love JavaScript.`);
}
//Using var in a loop:
var i = 5;
for (var i = 0; i < 10; i++) {
  console.log(i);
}
//Using let in a loop
let k = 5;

for (let k = 0; k < 10; k++) {
  console.log(k);
}
// The JavaScript for in statement loops through the properties of an Object:
const person = { fname: "John", lname: "Doe", age: 25 };
let text = "";
for (let x in person) {
  text += person[x];
}
console.log(`text = ${text}`);
// The JavaScript for in statement can also loop over the properties of an Array:
const numbers = [45, 4, 9, 16, 25];
let txt = "";
for (const x in numbers) {
  txt += numbers[x];
}
console.log(`txt = ${txt}`);
// The forEach() method calls a function (a callback function) once for each array element.
const arr = [45, 4, 9, 16, 25];

let string = "";
arr.forEach(myFunction);

function myFunction(value, index, array) {
  string += value;
}
console.log(string);

const cars = ["BMW", "Volvo", "Mini"];

let text1 = "";
for (const x of cars) {
  console.log(`Hihi: ${x}`);
  text1 += x;
}
console.log(`text1 = ${text1}`);

let language = "JavaScript";
let text2 = "";
for (const x of language) {
  text2 += x;
}
console.log(`text2 = ${text2}`);

for(const random of ['a', 'b', 1, 2]  ) {
  // Here it print values that held by constant random without modify it
  console.log(random); // a b 1 2
}

 // Here constant colors is holding two color
 var colors = ['purple', 'black'];

 // First color is purple
 console.log(colors[0]); // 'purple'

 // Second color is black
 console.log(colors[1]); // 'black'
colors[2] = 'Hihi'
console.log(colors[2]);
var colors = [1, 2]