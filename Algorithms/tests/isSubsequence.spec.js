/* eslint-env mocha */
/* eslint-disable no-unused-expressions */
const { expect } = require('chai')

const isss = require('../isSubsequence')

describe('#is subsequence', () => {
  context('hello, hello world', () => {
    it('should return true', () => {
      expect(isss('hello', 'hello world')).to.be.true
    })
  })

  context('sing, sting', () => {
    it('should return true', () => {
      expect(isss('sing', 'sting')).to.be.true
    })
  })

  context('abc abracadabra', () => {
    it('should return true', () => {
      expect(isss('abc', 'abracadabra')).to.be.true
    })
  })
})

describe('# order matters', () => {
  context('abc, acb', () => {
    it('should return false', () => {
      expect(isss('abc', 'acb')).to.be.false
    })
  })
})
