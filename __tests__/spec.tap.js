import tap from 'tap'

import sum from 'src/sum'

const a = 1
const b = 2
const r = 3

tap.equal(sum(a, b), r)
