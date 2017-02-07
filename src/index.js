'use strict'

import greeting from './greeting'

const goot = () => {
  const now = new Date().getHours()

  return new Promise(resolve => {
    resolve(greeting(now))
  })
}

module.exports = goot
