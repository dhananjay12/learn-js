function foo(x) {
  var x = x || 12;
  console.log(x);
}

foo(); //12 so far so good
foo(0); //12  - :-O

// To fiw we did

function foo(x) {
  var x = x !== undefined ? x : 12;
  console.log(x);
}

foo();
foo(0);

// ES6 way
function foo(x = 12) {
  console.log(x);
}
foo();
foo(0);

//It could be any valid javascript expression , even a function
function bar() {
  console.log("!");
}

function foo(x = bar()) {
  console.log(x);
}

//How many time do you think the bar above is called. //none
foo(); //Now bar will be called because its actually needed
foo(2); // None because bar was not needed

//Rest operator
function foo() {
  var args = Array.prototype.slice.call(arguments);
  console.log(args[0]);
  console.log(args[1]);
}

foo(1, 2);
console.log("##");
foo(1);

//ES6 way
function foo(...args) {
  console.log(args[0]);
  console.log(args[1]);
}

foo(1, 2);
console.log("##");
foo(1);

// Spread - Suppose you want to pass the arguments into some other function. Then

function bar(...args) {
  console.log(args[0]);
}

function foo(...args) {
  console.log(args[0]);
  console.log(args[1]);
  args.unshift(44);
  bar(...args);
}

foo(1, 2);

//Above code - At level foo the args act as gather/rest parameter.
//At bar(...args) , the args act as spread parameter
