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

  find(query) {
    return _asyncToGenerator(function* () {
      throw new Error('find method is not implemented on current driver.');
    })();
  }

  findOne(query) {
    return _asyncToGenerator(function* () {
      throw new Error('findOne method is not implemented on current driver.');
    })();
  }

  update(query, update) {
    return _asyncToGenerator(function* () {
      throw new Error('update method is not implemented on current driver.');
    })();
  }

  delete(query) {
    return _asyncToGenerator(function* () {
      throw new Error('delete method is not implemented on current driver.');
    })();
  }

  getPrimaryKey(doc) {
    throw new Error('getPrimaryKey method is not implemented on current driver.');
  }

}

exports.default = Driver;
//# sourceMappingURL=Driver.js.map