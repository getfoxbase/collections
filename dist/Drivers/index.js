"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _MongoDB = _interopRequireDefault(require("./MongoDB"));

var _MySQL = _interopRequireDefault(require("./MySQL"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _default = {
  MongoDB: _MongoDB.default,
  MySQL: _MySQL.default
};
exports.default = _default;
//# sourceMappingURL=index.js.map