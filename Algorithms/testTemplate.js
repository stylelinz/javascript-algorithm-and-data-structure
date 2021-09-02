function template ({ ctx, input, fn, result }) {
  context(ctx, () => {
    it(input.toString(), () => {
      expect(fn(input)).to.equal(result)
    })
  })
}

module.exports = template
