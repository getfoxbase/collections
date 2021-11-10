"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "Collection", {
  enumerable: true,
  get: function () {
    return _Collection.default;
  }
});
Object.defineProperty(exports, "Driver", {
  enumerable: true,
  get: function () {
    return _Driver.default;
  }
});
Object.defineProperty(exports, "Drivers", {
  enumerable: true,
  get: function () {
    return _Drivers.default;
  }
});
Object.defineProperty(exports, "Type", {
  enumerable: true,
  get: function () {
    return _Type.default;
  }
});
Object.defineProperty(exports, "Types", {
  enumerable: true,
  get: function () {
    return _Types.default;
  }
});
exports.createCollection = createCollection;

var _Collection = _interopRequireDefault(require("./Collection"));

var _Type = _interopRequireDefault(require("./Type"));

var _Driver = _interopRequireDefault(require("./Driver"));

var _Types = _interopRequireDefault(require("./Types"));

var _Drivers = _interopRequireDefault(require("./Drivers"));

var _DocumentsLive = _interopRequireDefault(require("./CollectionTypes/DocumentsLive"));

var _DocumentsCached = _interopRequireDefault(require("./CollectionTypes/DocumentsCached"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function createCollection(name, opts) {
  const classes = {
    DocumentsLive: _DocumentsLive.default,
    DocumentsCached: _DocumentsCached.default
  };
  const className = opts.cached ? 'DocumentsCached' : 'DocumentsLive';

  if (classes[className] === undefined) {
    throw new Error(`Collection type "${className}" does not exists.`);
  }

  return _Collection.default.create(name, opts, classes[className]);
}
//# sourceMappingURL=index.js.map