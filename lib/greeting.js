'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
var greeting = function greeting(time) {
  if (time < 12) {
    return 'morning';
  } else if (time <= 18) {
    return 'afternoon';
  } else if (time <= 23) {
    return 'night';
  }

  return 'Invalid time';
};

exports.default = greeting;