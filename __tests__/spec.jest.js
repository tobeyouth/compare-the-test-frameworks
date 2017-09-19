import sum from 'src/sum'
import promiseSum from 'src/promise'
import generatorSum from 'src/generator'


const a = 1
const b = 2
const r = 3

test('jest:sum', function () {
    expect(sum(a, b)).toBe(3)
})

test('jest:promise', function () {
  promiseSum(a, b).then((res) => {
    expect.toBe(r)
  })
})

test('jest:generator', function () {
  const trick = generatorSum(a,b)
  expect(trick.next(3).value).toBe(r)
})
