"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _Type = _interopRequireDefault(require("../Type"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class TextType extends _Type.default {
  static formatIn(value) {
    return value + '';
  }

  static formatOut(value) {
    return value;
  }

}

exports.default = TextType;
//# sourceMappingURL=Text.js.map