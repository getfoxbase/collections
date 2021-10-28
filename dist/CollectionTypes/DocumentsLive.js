"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _Documents = _interopRequireDefault(require("./Documents"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

class DocumentsLive extends _Documents.default {
  constructor(name, configuration) {
    super(name, configuration);
  }

  findById(id) {
    return _asyncToGenerator(function* () {})();
  }

  find(query) {
    return _asyncToGenerator(function* () {})();
  }

  updateById(id, data) {
    return _asyncToGenerator(function* () {})();
  }

  deleteById(id) {
    return _asyncToGenerator(function* () {})();
  }

}

exports.default = DocumentsLive;
//# sourceMappingURL=DocumentsLive.js.map