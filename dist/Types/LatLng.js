"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _Type = _interopRequireDefault(require("../Type"));

var _Float = _interopRequireDefault(require("./Float"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class LatLngType extends _Type.default {
  static formatIn(value, field) {
    if (typeof value === 'string') {
      value = value.split(',').map(v => _Float.default.formatIn(v));
      value = {
        lat: value[0],
        lng: value[1]
      };
    }

    return value;
  }

  static formatOut(value, field) {
    return value;
  }

}

exports.default = LatLngType;
//# sourceMappingURL=LatLng.js.map