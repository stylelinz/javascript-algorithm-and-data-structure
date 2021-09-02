/* eslint-env mocha */
/* eslint-disable no-unused-expressions */
const { expect } = require('chai')

const power = require('../power')

describe('# POWER!!!!', () => {
  context('2 ^ 0', () => {
    it('returns 1', () => {
      expect(power(2, 0)).to.equal(1)
    })
  })

  context('2 ^ 2', () => {
    it('returns 4', () => {
      expect(power(2, 2)).to.equal(4)
    })
  })

  context('2 ^ 4', () => {
    it('returns 16', () => {
      expect(power(2, 4)).to.equal(16)
    })
  })
})
