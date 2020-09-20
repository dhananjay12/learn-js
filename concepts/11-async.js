//Callbacks

// long running function
function first() {
  setTimeout(() => {
    console.log(1);
  }, 500);
}

function second() {
  console.log(2);
}

first();
second();

//

function first(callback) {
  setTimeout(() => {
    console.log(1);
    callback();
  }, 500);
}

function second() {
  console.log(2);
}

first(second);
console.log("moving on to other things..");

//

function longGET(num, time, cb) {
  setTimeout(() => {
    console.log(`GET: ${num}`);
    cb(num);
  }, time);
}

// hell
longGET(1, 500, function (num) {
  longGET(++num, 700, function (num) {
    longGET(++num, 300, function (num) {
      console.log("done");
    });
  });
});

//Promise

("---------------------");
// longGET
("---------------------");

const longGET = (num) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (Math.random() <= 0.65 || true) {
        // remove true for error
        console.log(`GET: ${num}`);
        resolve(num);
      } else {
        console.log(`Error in GET: ${num}`);
        reject(num);
      }
    }, 1000);
  });
};

//Promise
const one = longGET(1); // returns a promise

one
  .then(() => {
    console.log("done");
  })
  .catch(() => {
    console.log("error");
  });

//
("---------------------");
// When you have multiple promise calls within promise
("---------------------");

const one = longGET(1); // returns a promise

one
  .then((num) => {
    return longGET(++num);
  })
  .then((num) => {
    console.log("done with 1 and 2");
  })
  .catch(() => {
    console.log("error");
  })
  .finally(() => {
    console.log("finally, finished executing!");
  });

("---------------------");
// parallel resolve both promise
("---------------------");

// start with all resolve
// add a reject to see catch in action

Promise.all([longGET(1), longGET(2)])
  .then((results) => {
    console.log("done with 1 and 2", results);
  })
  .catch((error) => {
    console.log(`error in ${error}`);
  });

//Async and Await

const longGET = (num) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (Math.random() <= 0.65 || true) {
        // remove true for error
        console.log(`GET: ${num}`);
        resolve(num);
      } else {
        console.log(`Error in GET: ${num}`);
        reject(num);
      }
    }, 1000);
  });
};

("---------------------");
// setup
("---------------------");

const executeGets = () => {
  let one = longGET(1);
  let two = longGET(++one);
  console.log("done with 1 and 2");
};

executeGets();

("---------------------");
// async/await
("---------------------");

const executeGets = async () => {
  let one = await longGET(1);
  let two = await longGET(++one);
  console.log("done with 1 and 2");
};

executeGets();

("---------------------");
// async/await - error handling
("---------------------");

const executeGets = async () => {
  try {
    let one = await longGET(1);
    let two = await longGET(++one);
    console.log("done with 1 and 2");
  } catch (err) {
    console.log(`error in ${err}`);
  }
};

executeGets();
