var color = 'red';

function first() {
  var color = 'green';
  console.log(color);
  second();
}

function second() {
  console.log(color);
}

first();
console.log(color);

//Scope exceptions - try-exception

var a;

try {
  a.length(); // illegal operation to force an exception!
} catch (err) {
  console.log('Error==>' + err); // works!
}

console.log(err); // ReferenceError: `err` not found

//Scope exceptions - eval

var a = 2;

function foo(str) {
  eval(str); // cheating! Use 
  console.log(a);
}

foo('var a= 3;'); // 3


//----

var a = 2;
 
function foo(str) {
"use strict"
eval( str ); // cheating!
console.log( a );
}
 
foo( "var a= 3;" ); // 2


//
