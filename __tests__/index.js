'use strict'

import test from 'ava'
import greeting from '../lib/greeting'

test('should return a not empty result', t => {
  const now = new Date().getHours()
  const result = greeting(now).length > 0

  t.is(result, true)
})

test('should return morning for 24', t => {
  const now = 24
  const result = greeting(now)

  t.is(result, 'morning')
})

test('should return morning for 0', t => {
  const now = 0
  const result = greeting(now)

  t.is(result, 'morning')
})

test('should return morning for 1', t => {
  const now = 1
  const result = greeting(now)

  t.is(result, 'morning')
})

test('should return morning for 2', t => {
  const now = 2
  const result = greeting(now)

  t.is(result, 'morning')
})

test('should return morning for 3', t => {
  const now = 3
  const result = greeting(now)

  t.is(result, 'morning')
})

test('should return morning for 4', t => {
  const now = 4
  const result = greeting(now)

  t.is(result, 'morning')
})

test('should return morning for 5', t => {
  const now = 5
  const result = greeting(now)

  t.is(result, 'morning')
})

test('should return morning for 6', t => {
  const now = 6
  const result = greeting(now)

  t.is(result, 'morning')
})

test('should return morning for 7', t => {
  const now = 7
  const result = greeting(now)

  t.is(result, 'morning')
})

test('should return morning for 8', t => {
  const now = 8
  const result = greeting(now)

  t.is(result, 'morning')
})

test('should return morning for 9', t => {
  const now = 9
  const result = greeting(now)

  t.is(result, 'morning')
})

test('should return morning for 10', t => {
  const now = 10
  const result = greeting(now)

  t.is(result, 'morning')
})

test('should return morning for 11', t => {
  const now = 11
  const result = greeting(now)

  t.is(result, 'morning')
})

test('should return afternoon for 12', t => {
  const now = 12
  const result = greeting(now)

  t.is(result, 'afternoon')
})

test('should return afternoon for 13', t => {
  const now = 13
  const result = greeting(now)

  t.is(result, 'afternoon')
})

test('should return afternoon for 14', t => {
  const now = 14
  const result = greeting(now)

  t.is(result, 'afternoon')
})

test('should return afternoon for 15', t => {
  const now = 15
  const result = greeting(now)

  t.is(result, 'afternoon')
})

test('should return afternoon for 16', t => {
  const now = 16
  const result = greeting(now)

  t.is(result, 'afternoon')
})

test('should return afternoon for 17', t => {
  const now = 17
  const result = greeting(now)

  t.is(result, 'afternoon')
})

test('should return afternoon for 18', t => {
  const now = 18
  const result = greeting(now)

  t.is(result, 'afternoon')
})

test('should return night for 19', t => {
  const now = 19
  const result = greeting(now)

  t.is(result, 'night')
})

test('should return night for 20', t => {
  const now = 20
  const result = greeting(now)

  t.is(result, 'night')
})

test('should return night for 21', t => {
  const now = 21
  const result = greeting(now)

  t.is(result, 'night')
})

test('should return night for 22', t => {
  const now = 22
  const result = greeting(now)

  t.is(result, 'night')
})

test('should return night for 23', t => {
  const now = 23
  const result = greeting(now)

  t.is(result, 'night')
})

test('should return an error', t => {
  const now = 200
  const result = greeting(now)

  t.is(result, 'Invalid time')
})
