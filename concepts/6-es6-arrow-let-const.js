function f1(x) {
  return x * 2;
}

//The above can be written in arrow function

f1 = (x) => x * 2; //many more flavours

//
var obj = {
  id: 42,
  foo: function f1() {
    setTimeout(function () {
      console.log(this.id);
    });
  },
};

//Above will print undefined and not 42.  To solve this what most people do is
var obj = {
  id: 42,
  foo: function f1() {
    var contex = this;
    setTimeout(function () {
      console.log(contex.id);
    }, 100);
  },
};
//Another way is to use the .bind utility
//With arrow
var obj = {
  id: 42,
  foo: function () {
    setTimeout(() => {
      console.log(this.id);
    }, 100);
  },
};

//let
function foo(x, y) {
  if (x > y) {
    var temp = x;
    x = y;
    y = temp;
  }
  console.log(temp);

  for (var i = 0; i < 10; i++) {}
  console.log(i);
}

foo(5, 4);

//

function foo(x, y) {
  if (x > y) {
    let temp = x;
    x = y;
    y = temp;
  }
  console.log(temp);

  for (let i = 0; i < 10; i++) {}
  console.log(i);
}

foo(5, 4);

//
function foo(x, y) {
  try {
    let z = x * 2;
  } catch (error) {
    console.log(error);
  }
  console.log(z);
}

foo(5, 4);

//
function foo(x, y) {
  let z;
  try {
    z = x * 2;
  } catch (error) {
    console.log(error);
  }
  console.log(z);
}

foo(5, 4);

//CONST

const x = [1, 2, 3];
x.push(4);
console.log(x.length); // So values can change, but not assignment

//

const x = Object.freeze([1, 2, 3]);
x.push(4);

//

var ob1 = {
  foo: 1,
  bar: {
    value: 2,
  },
};
Object.freeze(ob1);

const ob2 = {
  foo: 1,
  bar: {
    value: 2,
  },
};
