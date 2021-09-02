/* eslint-env mocha */
/* eslint-disable no-unused-expressions */
const sameFrequency = require('../sameFrequency')
const { expect } = require('chai')

describe('#same length', function () {
  context('182, 281', function () {
    it('should return true', function () {
      expect(sameFrequency(182, 281)).to.be.true
    })
  })

  context('123, 123', function () {
    it('should return true', function () {
      expect(sameFrequency(123, 123)).to.be.true
    })
  })

  context('34, 14', function () {
    it('should return false', function () {
      expect(sameFrequency(34, 14)).to.be.false
    })
  })

  context('3589578, 5879385', function () {
    it('should return true', function () {
      expect(sameFrequency(3589578, 5879385)).to.be.true
    })
  })
})

describe('#different length', function () {
  context('22, 222', function () {
    it('should return false', function () {
      expect(sameFrequency(22, 222)).to.be.false
    })
  })
})
