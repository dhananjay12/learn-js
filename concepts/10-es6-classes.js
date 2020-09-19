//Old way

function Watch(options) {
  this.brand = options.brand;
}

Watch.prototype.time = function () {
  console.log(new Date(Date.now()).toLocaleString());
};

function SmartWatch(options) {
  this.type = "smart";
}

//And you want to create SmartWatch with new variable “type”,
// but you also want to have all the things from Watch - its “brand”, its time functions etc

function Watch(options) {
  this.brand = options.brand;
}

Watch.prototype.time = function () {
  console.log(new Date(Date.now()).toLocaleString());
};

function SmartWatch(options) {
  Watch.call(this, options);
  this.type = "smart";
}

var sw = new SmartWatch({ brand: "Samsung" });

// inherit from Watch
SmartWatch.prototype = Object.create(Watch.prototype);
SmartWatch.prototype.constructor = SmartWatch;

//ES6 tried to make it easy

class Watch {
  constructor(options) {
    this.brand = options.brand;
  }

  time() {
    console.log(new Date(Date.now()).toLocaleString());
  }
}

class SmartWatch extends Watch {
  constructor(options) {
    super(options);
    this.type = "smart";
  }

  steps() {
    console.log(Math.floor(Math.random() * 10000));
  }
}

var sw = new SmartWatch({ brand: "Samsung" });
