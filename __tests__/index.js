'use strict'

import test from 'ava'
import greeting from '../lib/greeting'

test('should return a not empty result', t => {
  const now = new Date().getHours()
  const result = greeting(now).length > 0

  t.is(result, true)
})

test('should return morning', t => {
  const now = 10
  const result = greeting(now)

  t.is(result, 'morning')
})

test('should return afternoon', t => {
  const now = 14
  const result = greeting(now)

  t.is(result, 'afternoon')
})

test('should return night', t => {
  const now = 19
  const result = greeting(now)

  t.is(result, 'night')
})

test('should return an error', t => {
  const now = 200
  const result = greeting(now)

  t.is(result, 'Invalid time')
})
