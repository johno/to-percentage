var assert = require('assert');
var toPercentage = require('..');

describe('to-percentage', function() {
  it('should return the correct percentage', function() {
    assert.equal(toPercentage(0.43123456, 5), '43.12346%');
  });

  it('should handle .500 correctly', function() {
    assert.equal(toPercentage(0.500, 5), '50%');
  });

  it('should handle 1 properly', function() {
    assert.equal(toPercentage(1, 100), '100%');
  })
});
