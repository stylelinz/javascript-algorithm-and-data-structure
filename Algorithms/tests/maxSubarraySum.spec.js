/* eslint-env mocha */
/* eslint-disable no-unused-expressions */
const { expect } = require('chai')

const mss = require('../maxSubarraySum')

describe('# Max Subarray Sum', () => {
  context('[100, 200, 300, 400], 4', () => {
    it('return 1000', () => {
      expect(mss([100, 200, 300, 400], 4)).to.equal(1000)
    })
  })

  context('[1, 4, 2, 10, 23, 3, 1, 0, 20], 4', () => {
    it('return 39', () => {
      expect(mss([1, 4, 2, 10, 23, 3, 1, 0, 20], 4)).to.equal(39)
    })
  })

  context('[-3, 4, 0, -2, 6, -1], 2', () => {
    it('return 5', () => {
      expect(mss([-3, 4, 0, -2, 6, -1], 2)).to.equal(5)
    })
  })

  context('[2, 3], 3', () => {
    it('return null', () => {
      expect(mss([2, 3], 3)).to.be.null
    })
  })
})
