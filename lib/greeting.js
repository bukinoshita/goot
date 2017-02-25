'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _language = require('./../language.json');

var _language2 = _interopRequireDefault(_language);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var greeting = function greeting() {
  var time = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : new Date().getHours();
  var language = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'en';

  if (time < 12) {
    return _language2.default[language][0];
  } else if (time <= 18) {
    return _language2.default[language][1];
  } else if (time <= 23) {
    return _language2.default[language][2];
  }

  return 'Invalid time';
};

exports.default = greeting;