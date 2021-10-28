"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _Type = _interopRequireDefault(require("../Type"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class ObjectType extends _Type.default {
  static formatIn(value, field, collection) {
    var _field$fields;

    return collection.formatIn(value, (_field$fields = field.fields) !== null && _field$fields !== void 0 ? _field$fields : {});
  }

  static formatOut(value, field, collection) {
    var _field$fields2;

    return collection.formatOut(value, (_field$fields2 = field.fields) !== null && _field$fields2 !== void 0 ? _field$fields2 : {}, false);
  }

}

exports.default = ObjectType;
//# sourceMappingURL=Object.js.map