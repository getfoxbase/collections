"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

class Driver {
  constructor(opts) {
    this.opts = opts;
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

  destroy() {
    return _asyncToGenerator(function* () {})();
  }

  getPrimaryKey(doc) {
    throw new Error('getPrimaryKey method is not implemented on current driver.');
  }

  formatPrimaryKey(id) {
    throw new Error('formatPrimaryKey method is not implemented on current driver.');
  }

  getPrimaryKeyName() {
    throw new Error('getPrimaryKeyName method is not implemented on current driver.');
  }

}

exports.default = Driver;
//# sourceMappingURL=Driver.js.map