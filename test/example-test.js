const { describe, it } = require('node:test')
const assert = require('node:assert');

describe('Example test', () => {
  it('should pass with 1 + 1 equal to 2', () => {
    const expected = 2;
    const actual = 1 + 1;
    assert.equal(actual, expected)
  })
})
