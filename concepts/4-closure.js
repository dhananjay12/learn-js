function someHandler() {
    var a = 111;
 
    setTimeout(function() {
        console.log(a);
    }, 1000);
}
 
 
someHandler(); //111

//

function buildFunction() {
    var arr = [];
    for (var i = 1; i <= 3; i++) {
      arr.push(function () {
        console.log(i);
      });
    }
    return arr;
  }
  
  var fnArray = buildFunction();
  console.log(fnArray);
  fnArray[0]();
  fnArray[1]();
  fnArray[2]();

  
//What if we want to have a different value for i for each loop. Use IIFE

function buildFunction() {
    var arr = [];
    for (var i = 1; i <= 3; i++) {
      (function (j) {
        arr.push(function () {
          console.log(j);
        });
      })(i);
    }
    return arr;
  }
  
  var fnArray = buildFunction();
  console.log(fnArray);
  fnArray[0]();
  fnArray[1]();
  fnArray[2]();

  
  // The same thing can be achived by let keyword.
  function buildFunction() {
    'use strict';
    var arr = [];
    for (let i = 1; i <= 3; i++) {
      arr.push(function () {
        console.log(i);
      });
    }
    return arr;
  }
  
  var fnArray = buildFunction();
  console.log(fnArray);
  fnArray[0]();
  fnArray[1]();
  fnArray[2]();

  // Below  is not a closure as there is no inner function executing 
  //outside its scope. Closure occurs only for functions. Above is just an object reference.

  var var1 = (function() {
    var a = {
        b: 22
    };
    return {
        obj: a
    };
}());

console.log(var1.obj.b); //22

