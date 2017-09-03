'use strict'

const languages = require('./../language')

module.exports = (now, language = 'en') => {
  if (now < 12) {
    return languages[language][0]
  } else if (now <= 18) {
    return languages[language][1]
  } else if (now <= 23) {
    return languages[language][2]
  }

  return 'Invalid time'
}
