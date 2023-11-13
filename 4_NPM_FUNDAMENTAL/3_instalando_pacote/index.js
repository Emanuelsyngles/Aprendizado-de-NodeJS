import _ from 'lodash'

const a = [1, 2, 3, 4, 5]
const b = [2, 3, 5, 6, 8]

const diff = _.difference(a, b)
const diff2 = _.difference(b, a)

console.log(diff, diff2)