"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _DocumentsLive = _interopRequireDefault(require("./CollectionTypes/DocumentsLive"));

var _DocumentsCached = _interopRequireDefault(require("./CollectionTypes/DocumentsCached"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

const collections = {};
/**
 * Handles a collection.
 */

class Collection {
  /**
   * Creates a collection object, according to the configuration.
   * 
   * @param {string} name Collection name
   * @param {object} opts Options
   */
  constructor(name, opts) {
    var _opts$fields, _opts$driver;

    this.name = ((name !== null && name !== void 0 ? name : '') + '').trim();
    this.fields = (_opts$fields = opts.fields) !== null && _opts$fields !== void 0 ? _opts$fields : {};
    this.driver = (_opts$driver = opts.driver) !== null && _opts$driver !== void 0 ? _opts$driver : null;
    this.cache = [];

    if (this.name.length === 0) {
      throw new Error('Missing collection name.');
    }

    if (Object.keys(this.fields).length === 0) {
      throw new Error('Missing fields.');
    }

    if (this.driver === null) {
      throw new Error('Missing driver.');
    }
  }
  /**
   * Creates a collection, and caches the configuration.
   * 
   * @param {string} name Collection name
   * @param {object} opts Options
   */


  static create(name, opts) {
    const classes = {
      Live,
      Cached
    };
    const className = opts.cached ? 'DocumentsCached' : 'DocumentsLive';

    if (classes[className] === undefined) {
      throw new Error(`Collection type "${className}" does not exists.`);
    }

    collections[name] = new classes[className](name, opts);
    return collections[name];
  }
  /**
   * Retrieves an existing collection, or returns null.
   * 
   * @param {string} name Collection name
   * @returns Collection
   */


  static get(name) {
    var _collections$name;

    return (_collections$name = collections[name]) !== null && _collections$name !== void 0 ? _collections$name : null;
  }

  formatIn(input) {
    throw new Error('Method formatIn not implemented on current collection type.');
  }

  formatOut(doc) {
    throw new Error('Method formatOut not implemented on current collection type.');
  }

  findById(id) {
    return _asyncToGenerator(function* () {
      throw new Error('Method findById not implemented on current collection type.');
    })();
  }

  findByTags(tags) {
    return _asyncToGenerator(function* () {
      throw new Error('Method findByTags not implemented on current collection type.');
    })();
  }

  find(query) {
    return _asyncToGenerator(function* () {
      throw new Error('Method find not implemented on current collection type.');
    })();
  }

  updateById(id, data) {
    return _asyncToGenerator(function* () {
      throw new Error('Method updateById not implemented on current collection type.');
    })();
  }

  deleteById(id) {
    return _asyncToGenerator(function* () {
      throw new Error('Method deleteById not implemented on current collection type.');
    })();
  }

  create(data) {
    return _asyncToGenerator(function* () {
      throw new Error('Method create not implemented on current collection type.');
    })();
  }

}

exports.default = Collection;
//# sourceMappingURL=Collection.js.map