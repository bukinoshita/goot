'use strict';

var _greeting = require('./greeting');

var _greeting2 = _interopRequireDefault(_greeting);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var goot = function goot() {
  var now = new Date().getHours();

  return new Promise(function (resolve) {
    resolve((0, _greeting2.default)(now));
  });
};

module.exports = goot;