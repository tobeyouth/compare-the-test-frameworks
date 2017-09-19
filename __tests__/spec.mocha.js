import {expect, assert} from 'chai'
import sum from 'src/sum'
import promiseSum from 'src/promise'
import generatorSum from 'src/generator'

const a = 1
const b = 2
const r = 3


describe('mocha', () => {
  it('mocha:sum', () => {
    expect(sum(a, b)).to.equal(r)
  })

  it('mocha:promiseSum', () => {
    promiseSum(a,b).then((res) => {
      expect(res).to.equal(r)
    })
  })

  it('mocha:generator', () => {
    const trick = generatorSum(a,b).next()
    expect(trick.value).to.equal(r)
  })
})


