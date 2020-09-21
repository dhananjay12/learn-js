import {add} from "./sum"

var assert = require('assert');

describe('Check SUM', function () {
  it('should return 7 when passed 3,4', function () {
    let result = add(3, 4);
    assert.equal(result, 7);
  });
});