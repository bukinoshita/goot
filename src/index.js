'use strict'

import greeting from './greeting'

const goot = () => {
  const now = new Date().getHours()

  return new Promise(resolve => {
    resolve(greeting(now))
  })
}

goot().then(res => console.log(res))

export default goot
