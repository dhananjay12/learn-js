// Rule 4 - Default binding

function fn1() {
  console.log(this);
  console.log(this.a);
}

var a = 111;

fn1();

//As of strict mode this will be undefined for default binding.

function fn1() {
  "use strict";
  console.log(this);
  console.log(this.a);
}

var a = 111;

fn1();

//Rule 3 – Implicit Binding (Method invocation)

function fn1() {
  console.log(this);
  console.log(this.a);
}

var a = 111;

var obj1 = { a: 222, myfunction: fn1 };

obj1.myfunction();

//

var a = 111;

var obj1 = {
  a: 222,
  fn1: function () {
    console.log(this);
    console.log(this.a);
  },
};

var obj2 = {
  a: 333,
  fn2: obj1.fn1,
};

obj1.fn1();
obj2.fn2();

//Rule 2 – Explicit Binding

function fn1() {
  console.log(this);
  console.log(this.a);
}

var a = 111;

var obj1 = {
  a: 222,
  fn1: fn1,
};

fn1();
console.log("CAll");
fn1.call(obj1);
console.log("Apply");
fn1.apply(obj1);

//If you have additional arguments that you need to paas to your function that too.
//With apply you do it as an array
//With call, you pass individual arguments

//Hard Binding – .bind()

function fn1() {
  console.log(this);
  console.log(this.a);
}

var a = 111;

var obj1 = {
  a: 222,
};

var fn2 = fn1.bind(obj1);

var obj2 = {
  a: 333,
};

fn2();
console.log("CAll");
fn2.call(obj2);

//Rule 1 – Constructor invocation (New binding)

function Person(name) {
  this.name = name;
}
var jane = new Person("jane");

console.log(jane.name); //jane always
