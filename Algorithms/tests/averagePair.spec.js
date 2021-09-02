/* eslint-env mocha */
/* eslint-disable no-unused-expressions */
const { expect } = require('chai')

const ap = require('../averagePair')

describe('# find target average pair', function () {
  context('[1, 2, 3], 2.5', function () {
    it('should return true', function () {
      expect(ap([1, 2, 3], 2.5)).to.be.true
    })
  })

  context('[1, 3, 3, 5, 6, 7, 10, 12, 19], 8', function () {
    it('should return true', function () {
      expect(ap([1, 3, 3, 5, 6, 7, 10, 12, 19], 8)).to.be.true
    })
  })
})

describe('# with negative integer', function () {
  context('[-1, 0, 3, 4, 5, 6], 4.1', function () {
    it('should return false', function () {
      expect(ap([-1, 0, 3, 4, 5, 6], 4.1)).to.be.false
    })
  })
})

describe('# with empty array', function () {
  context('[], 4', function () {
    it('should return false', function () {
      expect(ap([], 4)).to.be.false
    })
  })
})
