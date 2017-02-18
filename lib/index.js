'use strict';

var _greeting = require('./greeting');

var _greeting2 = _interopRequireDefault(_greeting);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var goot = function goot() {
  var now = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : new Date().getHours();

  return new Promise(function (resolve, reject) {
    resolve((0, _greeting2.default)(now));

    if (Number.isInteger(now)) {
      reject('Invalid time');
    }
  });
};

module.exports = goot;