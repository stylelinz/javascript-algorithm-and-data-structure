const { expect } = require('chai')

const bs = require('../binary-search')

describe('binary search', () => {
  context('[1, 2, 3, 4, 5], 5', () => {
    it('return 1', () => {
      expect(bs([1, 2, 3, 4, 5], 5)).to.equal(5)
    })
  })
})
