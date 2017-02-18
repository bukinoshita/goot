'use strict'

import greeting from './greeting'

const goot = (now = new Date().getHours()) => {
  return new Promise((resolve, reject) => {
    resolve(greeting(now))

    if (Number.isInteger(now)) {
      reject('Invalid time')
    }
  })
}

module.exports = goot
