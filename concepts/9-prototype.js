//Object creation

//Using an Object Literal

var person1 = {
  fname: "John",
  lname: "Doe",
};

console.log(person1);

// Using an Function Constructor with new keyword

function Person(fname, lname) {
  console.log(this);
  this.fname = fname;
  this.lname = lname;
}

var john = new Person("John", "Doe");

console.log(john);

//

function Person(fname, lname) {
  console.log(this);
  this.fname = fname;
  this.lname = lname;
  return { a: 111 };
}

var john = new Person("John", "Doe");

console.log(john);

//

function Person(fname, lname) {
  console.log(this);
  this.fname = fname;
  this.lname = lname;
  return "Something";
}

var john = new Person("John", "Doe");

console.log(john);

//But now if you add a function to this constructor, that too
//will get copied over each instance of the object. You dont want this, so what to do??????

function Person(fname, lname) {
  this.fname = fname;
  this.lname = lname;
}

var john = new Person("John", "Doe");
Person.prototype.getFullName = function () {
  return this.fname + " " + this.lname;
};

console.log(john);

var jane = new Person("Jane", "Doe");

console.log(jane);

console.log("John Full Name==>" + john.getFullName());
console.log("Jane Full Name==>" + jane.getFullName());

//The Object.create() Method
var person = {
  fname: "Default",
  lname: "Default",
  getFullName: function () {
    return this.fname + " " + this.lname;
  },
};

console.log(person);

var john = Object.create(person);

console.log(john);

//

var john = Object.create(person);

john.fname = "John";
john.lname = "Doe";

console.log(john);

//Lets see an example of passing second parameter.

var person = {
  fname: "John",
  lname: "Doe",
  getFullName: function () {
    return this.fname + " " + this.lname;
  },
};

console.log(person);

var john = Object.create(person, {
  age: {
    configurable: true,
    enumerable: true,
    value: 25,
    writable: true,
  },
});
console.log(john);
