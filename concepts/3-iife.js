var a = "111";

(function () {
  var a = "222";
  var b = "333";
  console.log("a inside iife==>" + a);
})();

console.log("a outside iife==>" + a);
console.log("a outside iife==>" + b);

//

(function (global) {
  function fn1() {
    console.log("fn1 called");
  }

  function fn2() {
    console.log("fn2");
  }

  global.publicFn1 = fn1;
})(window);

publicFn1();
fn1();

//Basic Module Pattern
var myModule = (function () {
  var privateVariable = "privateVariable";

  function privateMethod() {
    console.log("Private function");
  }

  return {
    publicMethod: function () {
      console.log("Public function");
    },
  };
})();

myModule.publicMethod();
console.log(myModule.privateVariable);
myModule.privateMethod();

// Revealing Module Pattern

var myModule = (function () {
  var privateVariable = "privateVariable";

  function privateMethod() {
    console.log("Private function");
  }

  function publicMethod() {
    console.log("Public function");
  }

  return {
    globalMethod: publicMethod,
  };
})();

myModule.globalMethod();
myModule.publicMethod();

//
