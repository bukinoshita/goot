'use strict';

var _greeting = require('./greeting');

var _greeting2 = _interopRequireDefault(_greeting);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var goot = function goot(now, language) {
  return new Promise(function (resolve, reject) {
    resolve((0, _greeting2.default)(now, language));

    if (Number.isInteger(now)) {
      reject('Invalid time');
    }
  });
};

goot(2, 'de');

module.exports = goot;