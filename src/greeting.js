'use strict'

import languages from './../language.json'

const greeting = (time = new Date().getHours(), language = 'en') => {
  if (time < 12) {
    return languages[language][0]
  } else if (time <= 18) {
    return languages[language][1]
  } else if (time <= 23) {
    return languages[language][2]
  }

  return 'Invalid time'
}

export default greeting
