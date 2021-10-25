"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _Type = _interopRequireDefault(require("../Type"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class FloatType extends _Type.default {
  static formatIn(value, field) {
    return parseFloat(`${value}`.replace(/\s/g, '').replace(/,/g, '.'));
  }

  static formatOut(value, field) {
    return value;
  }

}

exports.default = FloatType;
//# sourceMappingURL=Float.js.map