import test from 'ava'

import sum from 'src/sum'
import promiseSum from 'src/promise'
import generatorSum from 'src/generator'

const a = 1
const b = 2
const r = 3

test('ava:common', (t) => {
  
  return t.is(sum(a, b), r, 'ava common')

})

test('ava:promise', (t) => {
 
 return promiseSum(a, b).then((res) => {
    t.is(res, r, 'ava:promise')
  })

})

test('ava:generator', (t) => {

  let trick = generatorSum(a, b).next()
  return t.is(trick.value, r)

})
