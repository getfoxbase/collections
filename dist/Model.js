"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _sift = _interopRequireDefault(require("sift"));

var _Dot = _interopRequireDefault(require("./Tools/Dot"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

class Model {
  constructor(collection, data) {
    var _data$id;

    this.collection = collection;
    this.driver = collection.driver;
    this.data = data;
    this.id = (_data$id = data.id) !== null && _data$id !== void 0 ? _data$id : null;
  }

  getCollection() {
    return this.collection;
  }

  get(key, defaultValue = null) {
    var _Dot$get;

    return (_Dot$get = _Dot.default.get(this.data, key)) !== null && _Dot$get !== void 0 ? _Dot$get : defaultValue;
  }

  set(key, value) {
    _Dot.default.set(this.data, key, value);

    return this;
  }

  setMany(o) {
    for (let key in o) _Dot.default.set(this.data, key, o[key]);

    return this;
  }

  matches(query = {}) {
    return (0, _sift.default)(query)(this.data);
  }

  export() {
    return this.data;
  }

  save() {
    var _this = this;

    return _asyncToGenerator(function* () {
      if (_this.id !== null) {
        // Update
        const query = {};
        query[_this.driver.getPrimaryKeyName()] = _this.driver.formatPrimaryKey(_this.id);
        const ret = yield _this.driver.update(_this.collection.name, query, yield _this.collection.formatIn(_this.data));
      } else {
        // Insert
        const ret = yield _this.driver.insert(_this.collection.name, yield _this.collection.formatIn(_this.data));
        _this.id = _this.driver.getPrimaryKey(ret);
        _this.data.id = _this.id;

        _this.collection.addToCache(_this);
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

      const ret = yield _this2.driver.delete(_this2.collection.name, query);
      collection.removeFromCache(_this2.id);
      _this2.id = null;
      return ret;
    })();
  }

}

exports.default = Model;
//# sourceMappingURL=Model.js.map