'use strict'

import greeting from './greeting'

const goot = (now, language) => {
  return new Promise((resolve, reject) => {
    resolve(greeting(now, language))

    if (Number.isInteger(now)) {
      reject('Invalid time')
    }
  })
}

module.exports = goot
