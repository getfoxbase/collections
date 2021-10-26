"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _Documents = _interopRequireDefault(require("./Documents"));

var _Model = _interopRequireDefault(require("../Model"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

class DocumentsCached extends _Documents.default {
  constructor(name, configuration) {
    super(name, configuration);
    this.cached = true;
    this.cache = [];
    this.loadCache();
  }

  loadCache() {
    var _this = this;

    return _asyncToGenerator(function* () {
      const documents = yield _this.driver.find(_this.name, {});
      _this.cache = [];

      for (let doc of documents) {
        _this.cache.push(new _Model.default(_this.name, yield _this.formatOut(doc), _this.driver));
      }
    })();
  }

  removeFromCache(id) {
    const idx = this.cache.findIndex(doc => doc.id == id);
    if (idx !== -1) this.cache.splice(idx, 1);
  }

  addToCache(doc) {
    this.cache.push(doc);
  }

  findById(id) {
    return _asyncToGenerator(function* () {})();
  }

  findByTags(tags) {
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

  create(data) {
    return _asyncToGenerator(function* () {})();
  }

}

exports.default = DocumentsCached;
//# sourceMappingURL=DocumentsCached.js.map