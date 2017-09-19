import "regenerator-runtime/runtime"

import test from 'tape'

import sum from 'src/sum'
import promiseSum from 'src/promise'
import generatorSum from 'src/generator'



let a = 1
let b = 2
let r = 3


test('tape:sum', (t) => {
  
  promiseSum(a, b).then((res) => {
    t.equal(res, r, 'promise equal')
  })


  let trick = generatorSum(a, b).next()
  t.equal(trick.value, r, 'generator equal')

  t.equal(sum(a, b), r, 'common equal') 
  
  t.end()
})

test('tape:after', (t) => {
  t.equal(a, 1, 'coust equal')
  t.end()
})
