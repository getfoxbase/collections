"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _Type = _interopRequireDefault(require("../Type"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class EnumType extends _Type.default {
  static formatIn(value, field) {
    var _field$values;

    if (((_field$values = field.values) !== null && _field$values !== void 0 ? _field$values : []).includes(value) === false) {
      var _field$default;

      value = (_field$default = field.default) !== null && _field$default !== void 0 ? _field$default : null;
    }

    return value;
  }

  static formatOut(value, field) {
    return value;
  }

}

exports.default = EnumType;
//# sourceMappingURL=Enum.js.map