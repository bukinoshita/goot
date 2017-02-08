'use strict'

const greeting = time => {
  if ((time < 12 && time >= 0) || time === 24) {
    return 'morning'
  } else if (time > 11 && time < 19) {
    return 'afternoon'
  } else if (time > 18 && time < 24) {
    return 'night'
  }

  return 'Invalid time'
}

export default greeting
