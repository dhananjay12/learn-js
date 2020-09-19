//Array destructuring

//Earlier

function foo() {
  return [1, 2, 3];
}

var temp = foo();
var a = temp[0];
var b = temp[1];
var c = temp[2];

console.log(a + "#" + b + "#" + c);

//ES6 way

function foo() {
  return [1, 2, 3];
}

var [a, b, c] = foo();

console.log(a + "#" + b + "#" + c);

//What would happen if the array that we gor has fewer values

function foo() {
  return [1, 2];
}

var [a, b, c] = foo();

console.log(a + "#" + b + "#" + c);

//What if I want to have some default values

function foo() {
  return [1];
}

var [a, b = 33, c] = foo();

console.log(a + "#" + b + "#" + c);

//What if you got back a null or undefined
function foo() {
  return null; //or defined
}

var [a, b = 33, c] = foo() || [];

console.log(a + "#" + b + "#" + c);

//We can use the rest operator here
function foo() {
  return [1, 2];
}

var [a, b, ...c] = foo();
console.log(c);

//What if we have an nested array.

function foo() {
  return [1, 2, [3, 4, 5, 6]];
}
var [a, b, [c, d]] = foo();

console.log(c + "#" + d);

//OBJECT DESTRUCTURING

function foo() {
  return { a: 1, b: 2, c: 3 };
}

var { a: x, b: y, c: z } = foo();
console.log(x + "#" + y + "#" + z);

//If the source and target have the same name

function foo() {
  return { a: 1, b: 2, c: 3 };
}

var { a, b, c } = foo();
console.log(a + "#" + b + "#" + c);

//We can have defaults here too

function foo() {
  return { a: 1 };
}

var { a, b = 19, c } = foo();
console.log(a + "#" + b + "#" + c);

//If we want to guard if want object is not returned,

function foo() {
  return null;
}

var { a, b = 19, c } = foo() || {};
console.log(a + "#" + b + "#" + c);
