/* eslint-env mocha */
/* eslint-disable no-unused-expressions */
const { expect } = require('chai')

const msl = require('../minSubarrayLen')

describe('# min subarray length', () => {
  context('[2, 3, 1, 2, 4, 3], 7', () => {
    it('return 2', () => {
      expect(msl([2, 3, 1, 2, 4, 3], 7)).to.equal(2)
    })
  })
})
