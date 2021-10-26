"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _Driver = _interopRequireDefault(require("../Driver"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

class MySQL extends _Driver.default {
  constructor(opts) {
    super(opts);
  }

  find(collectionName, query) {
    return _asyncToGenerator(function* () {
      throw new Error('find method is not implemented on current driver.');
    })();
  }

  findOne(collectionName, query) {
    return _asyncToGenerator(function* () {
      throw new Error('findOne method is not implemented on current driver.');
    })();
  }

  insert(collectionName, doc) {
    return _asyncToGenerator(function* () {
      throw new Error('insert method is not implemented on current driver.');
    })();
  }

  update(collectionName, query, update) {
    return _asyncToGenerator(function* () {
      throw new Error('update method is not implemented on current driver.');
    })();
  }

  delete(collectionName, query) {
    return _asyncToGenerator(function* () {
      throw new Error('delete method is not implemented on current driver.');
    })();
  }

  getPrimaryKey(doc) {
    var _doc$id;

    return (_doc$id = doc.id) !== null && _doc$id !== void 0 ? _doc$id : null;
  }

  formatPrimaryKey(id) {
    return +id;
  }

  getPrimaryKeyName() {
    return 'id';
  }

}

exports.default = MySQL;
//# sourceMappingURL=MySQL.js.map