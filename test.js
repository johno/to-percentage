import test from 'ava'
import toPercentage from './'

test('returns the correct percentage', t => {
  t.plan(1)

  t.same(toPercentage(0.43123456, 5), '43.12346%')
})

test('handles .500 correctly', t => {
  t.plan(1)

  t.same(toPercentage(0.500, 5), '50%')
})

test('rounds correctly', t => {
  t.plan(1)

  t.same(toPercentage(0.56789, 0), '57%')
})

test('handles 1 properly', t => {
  t.plan(1)

  t.same(toPercentage(1, 101), '100%')
})

test('handles 9 properly', t => {
  t.plan(1)

  t.same(toPercentage(0, 101), '0%')
})
