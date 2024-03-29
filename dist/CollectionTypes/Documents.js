"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _Collection = _interopRequireDefault(require("../Collection"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

class Documents extends _Collection.default {
  constructor(name, configuration) {
    super(name, configuration);
    this.cached = false;
  }

  formatIn(input, fields = null) {
    var _this = this;

    return _asyncToGenerator(function* () {
      if (fields === null) {
        var _this$fields;

        fields = (_this$fields = _this.fields) !== null && _this$fields !== void 0 ? _this$fields : {};
      }

      let ret = {};

      for (const [key, field] of Object.entries(fields)) {
        var _ref, _input$key;

        let value = (_ref = (_input$key = input[key]) !== null && _input$key !== void 0 ? _input$key : field.default) !== null && _ref !== void 0 ? _ref : null;

        if (field.isArray && value instanceof Array === false) {
          value = [value].filter(a => a !== null);
        }

        if (field.isArray) {
          let newVal = [];

          for (let val of value) {
            val = yield field.type.formatIn(val, field, _this);
            if (val !== null) newVal.push(val);
          }

          value = newVal;
        } else {
          value = yield field.type.formatIn(value, field, _this);

          if (value === null && !field.nullable) {
            throw new Error(`Missing value for "${key}" in the "${_this.name}" collection.`);
          }
        }

        ret[key] = value;
      }

      return ret;
    })();
  }

  formatOut(doc, fields = null, withId = true) {
    var _this2 = this;

    return _asyncToGenerator(function* () {
      if (fields === null) {
        var _this2$fields;

        fields = (_this2$fields = _this2.fields) !== null && _this2$fields !== void 0 ? _this2$fields : {};
      }

      let ret = {};
      if (withId) ret.id = _this2.driver.getPrimaryKey(doc);

      for (const [key, field] of Object.entries(fields)) {
        var _doc$key;

        let value = (_doc$key = doc[key]) !== null && _doc$key !== void 0 ? _doc$key : null;

        if (field.isArray && value instanceof Array === false) {
          value = [value].filter(a => a !== null);
        }

        if (field.isArray) {
          let newVal = [];

          for (let val of value) {
            val = yield field.type.formatOut(val, field, _this2);
            if (val !== null) newVal.push(val);
          }

          value = newVal;
        } else {
          value = yield field.type.formatOut(value, field, _this2);
        }

        ret[key] = value;
      }

      return ret;
    })();
  }

  removeFromCache(id) {}

  addToCache(doc) {}

}

exports.default = Documents;
//# sourceMappingURL=Documents.js.map