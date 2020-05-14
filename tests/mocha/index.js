// Example file linted using the "pat/mocha" config.
const assert = require('assert')

describe('Array', () => {
  describe('#indexOf()', () => {
    it('should return -1 when the value is not present', () => {
      assert.equal([ 1, 2 ].indexOf(4), -1)
    })
  })
})
