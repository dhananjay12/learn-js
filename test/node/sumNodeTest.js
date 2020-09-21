var sumNode = require('./sumNode');

var assert = require('assert');


describe('Check SUM', function () {
  it('should return 7 when passed 3,4', function () {
    let result = sumNode(3, 4);
    assert.equal(result, 7);
  });
});