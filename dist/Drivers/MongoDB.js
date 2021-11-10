"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _mongodb = require("mongodb");

var _Driver = _interopRequireDefault(require("../Driver"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

class MongoDB extends _Driver.default {
  constructor(opts) {
    var _opts$options;

    super(opts);
    this.client = new _mongodb.MongoClient(opts.dsn, _objectSpread({
      keepAlive: true,
      appName: 'foxbase'
    }, (_opts$options = opts.options) !== null && _opts$options !== void 0 ? _opts$options : {}));
    this.db = null;
  }

  init() {
    var _this = this;

    return _asyncToGenerator(function* () {
      if (_this.db !== null) {
        return;
      }

      yield _this.client.connect();
      _this.db = _this.client.db(_this.opts.db);
    })();
  }

  destroy() {
    var _this2 = this;

    return _asyncToGenerator(function* () {
      yield _this2.client.close();
    })();
  }

  find(collectionName, query) {
    var _this3 = this;

    return _asyncToGenerator(function* () {
      yield _this3.init();

      const cursor = _this3.db.collection(collectionName).find(query);

      return yield cursor.toArray();
    })();
  }

  findOne(collectionName, query) {
    var _this4 = this;

    return _asyncToGenerator(function* () {
      yield _this4.init();

      const doc = _this4.db.collection(collectionName).findOne(query);

      return doc !== null && doc !== void 0 ? doc : null;
    })();
  }

  insert(collectionName, doc) {
    var _this5 = this;

    return _asyncToGenerator(function* () {
      yield _this5.init();

      _this5.db.collection(collectionName).insertOne(doc);

      return doc;
    })();
  }

  update(collectionName, query, update) {
    var _this6 = this;

    return _asyncToGenerator(function* () {
      yield _this6.init();
      const ret = yield _this6.db.collection(collectionName).updateMany(query, {
        $set: update
      });
      return ret.modifiedCount;
    })();
  }

  delete(collectionName, query) {
    var _this7 = this;

    return _asyncToGenerator(function* () {
      yield _this7.init();
      const ret = yield _this7.db.collection(collectionName).deleteMany(query);
      return ret.deletedCount;
    })();
  }

  getPrimaryKey(doc) {
    if (doc._id === undefined) return null;
    return doc._id.toHexString();
  }

  formatPrimaryKey(id) {
    return _mongodb.ObjectId.createFromHexString(id);
  }

  getPrimaryKeyName() {
    return '_id';
  }

}

exports.default = MongoDB;
//# sourceMappingURL=MongoDB.js.map