/* eslint-env mocha */
/* eslint-disable no-unused-expressions */
const { expect } = require('chai')

const atd = require('../areThereDuplicates')

describe('Are there Duplicates?', function () {
  context('1, 2, 3', function () {
    it('should return false', function () {
      expect(atd(1, 2, 3)).to.be.false
    })
  })

  context('1, 2, 2', function () {
    it('should return true', function () {
      expect(atd(1, 2, 2)).to.be.true
    })
  })

  context('a, b, c, a', function () {
    it('should return true...', function () {
      expect(atd('a', 'b', 'c', 'a')).to.be.true
    })
  })

  context('nothing', function () {
    it('should return false', function () {
      expect(atd()).to.be.false
    })
  })
})
