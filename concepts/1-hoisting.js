b();
console.log(a);

var a = "Greetings!!";

function b() {
  console.log("Called B");
}

//Called B
//undefined

var var1 = "11";

function fn1() {
  var var1 = "22";
  console.log("In fn1::" + var1);
  var2 = "33";
}
console.log("In global::" + var1);
fn1();
console.log("In global::" + var1);
console.log("In global::" + var2);

//

var a = "111";

function fn1() {
  var a = "222";
  function fn2(c) {
    console.log("fn2 c ==>" + c);
    console.log("fn2 a before ==>" + a);
    a = c;
    console.log("fn2 a before ==>" + a);
    b = a;
  }
  fn2("333");
}

fn1();
console.log("a outside ==>" + a);
console.log("b outside ==>" + b);
fn2();

//  functions are hoisted first and then the variable gets registered

console.log(sayHi);
sayHi();

var sayHi = "11";

function sayHi() {
  console.log("Hi");
}

console.log(sayHi);
sayHi();
