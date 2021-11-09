"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _Model = _interopRequireDefault(require("../Model"));

var _Documents = _interopRequireDefault(require("./Documents"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

class DocumentsLive extends _Documents.default {
  constructor(name, configuration) {
    super(name, configuration);
  }

  findById(id) {
    var _this = this;

    return _asyncToGenerator(function* () {
      const query = {};
      query[_this.driver.getPrimaryKeyName()] = _this.driver.formatPrimaryKey(id);
      const docData = yield _this.driver.findOne(_this.name, query);

      if (!docData) {
        return null;
      }

      return new _Model.default(_this.name, yield _this.formatOut(docData), _this.driver);
    })();
  }

  find(query) {
    var _this2 = this;

    return _asyncToGenerator(function* () {
      const documents = yield _this2.driver.find(_this2.name, query);
      const ret = [];

      for (let doc of documents) {
        ret.push(new _Model.default(_this2.name, yield _this2.formatOut(doc), _this2.driver));
      }

      return ret;
    })();
  }

  updateById(id, data) {
    var _this3 = this;

    return _asyncToGenerator(function* () {
      const doc = yield _this3.findById(id);

      if (doc === null) {
        return false;
      }

      doc.setMany(data);
      yield doc.save();
      return true;
    })();
  }

  deleteById(id) {
    var _this4 = this;

    return _asyncToGenerator(function* () {
      const doc = yield _this4.findById(id);

      if (doc === null) {
        return false;
      }

      yield doc.delete();
      return true;
    })();
  }

}

exports.default = DocumentsLive;
//# sourceMappingURL=DocumentsLive.js.map