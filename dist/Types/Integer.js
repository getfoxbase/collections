"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _Type = _interopRequireDefault(require("../Type"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class IntegerType extends _Type.default {
  static formatIn(value, field) {
    return parseInt(`${value}`.replace(/\s/g, '').replace(/,/g, '.'));
  }

  static formatOut(value, field) {
    return value;
  }

}

exports.default = IntegerType;
//# sourceMappingURL=Integer.js.map