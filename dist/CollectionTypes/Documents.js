"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _Collection = _interopRequireDefault(require("../Collection"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class Documents extends _Collection.default {
  constructor(name, configuration) {
    super(name, configuration);
  }

  formatIn(input) {
    let ret = {};

    for (const [key, field] of ((_this$fields = this.fields) !== null && _this$fields !== void 0 ? _this$fields : {}).entries()) {
      var _this$fields, _ref, _input$key;

      let value = (_ref = (_input$key = input[key]) !== null && _input$key !== void 0 ? _input$key : field.default) !== null && _ref !== void 0 ? _ref : null;

      if (field.isArray && value instanceof Array === false) {
        value = [value].filter(a => a !== null);
      }

      if (field.isArray) {
        value.map(val => field.type.formatIn(val)).filter(val => val !== null);
      } else {
        value = field.type.formatIn(value);

        if (value === null && !field.nullable) {
          throw new Error(`Missing value for "${key}" in the "${this.name}" collection.`);
        }
      }

      ret[key] = value;
    }

    return ret;
  }

  formatOut(doc) {
    let ret = {
      id: this.driver.getPrimaryKey(doc)
    };

    for (const [key, field] of ((_this$fields2 = this.fields) !== null && _this$fields2 !== void 0 ? _this$fields2 : {}).entries()) {
      var _this$fields2, _doc$key;

      let value = (_doc$key = doc[key]) !== null && _doc$key !== void 0 ? _doc$key : null;

      if (field.isArray && value instanceof Array === false) {
        value = [value].filter(a => a !== null);
      }

      if (field.isArray) {
        value.map(val => field.type.formatOut(val)).filter(val => val !== null);
      } else {
        value = field.type.formatOut(value);
      }

      ret[key] = value;
    }

    return ret;
  }

}

exports.default = Documents;
//# sourceMappingURL=Documents.js.map