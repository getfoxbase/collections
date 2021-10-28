"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _dayjs = _interopRequireDefault(require("dayjs"));

var _Type = _interopRequireDefault(require("../Type"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class DateType extends _Type.default {
  static formatIn(value) {
    return (0, _dayjs.default)(value).toDate();
  }

  static formatOut(value) {
    return value;
  }

}

exports.default = DateType;
//# sourceMappingURL=Date.js.map