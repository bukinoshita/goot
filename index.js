'use strict'

const greeting = require('./lib/greeting')

module.exports = (now, language) => {
  if (typeof now !== 'number') {
    throw new TypeError('Invalid time')
  }

  return greeting(now, language)
}
