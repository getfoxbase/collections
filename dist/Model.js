"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _sift = _interopRequireDefault(require("sift"));

var _Collection = _interopRequireDefault(require("./Collection"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

class Model {
  constructor(collectionName, data, driver) {
    var _data$id;

    this.driver = driver;
    this.collectionName = collectionName;
    this.data = data;
    this.id = (_data$id = data.id) !== null && _data$id !== void 0 ? _data$id : null;
  }

  getCollection() {
    return _Collection.default.get(this.collectionName);
  }

  get(key, defaultValue = null) {
    var _this$data$key;

    return (_this$data$key = this.data[key]) !== null && _this$data$key !== void 0 ? _this$data$key : defaultValue;
  }

  set(key, value) {
    this.data[key] = value;
    return this;
  }

  setMany(o) {
    for (let key in o) this.data[key] = o[key];

    return this;
  }

  matches(query = {}) {
    return (0, _sift.default)(query)(this.data);
  }

  save() {
    var _this = this;

    return _asyncToGenerator(function* () {
      const collection = _Collection.default.get(_this.collectionName);

      if (_this.id !== null) {
        // Update
        const query = {};
        query[_this.driver.getPrimaryKeyName()] = _this.driver.formatPrimaryKey(_this.id);
        const ret = yield _this.driver.update(_this.collectionName, query, yield collection.formatIn(_this.data));
      } else {
        // Insert
        const ret = yield _this.driver.insert(_this.collectionName, yield collection.formatIn(_this.data));
        _this.id = _this.driver.getPrimaryKey(ret);
        if (collection.cached) collection.addToCache(_this);
      }

      return true;
    })();
  }

  delete() {
    var _this2 = this;

    return _asyncToGenerator(function* () {
      if (_this2.id === null) return false;
      const query = {};
      query[_this2.driver.getPrimaryKeyName()] = _this2.driver.formatPrimaryKey(_this2.id);

      const collection = _this2.getCollection();

      const ret = yield _this2.driver.delete(_this2.collectionName, query);
      if (collection.cached) collection.removeFromCache(_this2.id);
      _this2.id = null;
      return ret;
    })();
  }

}

exports.default = Model;
//# sourceMappingURL=Model.js.map