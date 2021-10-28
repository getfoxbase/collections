"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

class Dot {
  static get(object, dotpath) {
    if (object === undefined || object === null) {
      return object;
    }

    const parts = dotpath.split(".");
    let obj = object;

    for (let i = 0; i < parts.length; i++) {
      if (/^\d+/.test(parts[i])) {
        obj = obj[parseInt(parts[i])];
      } else {
        obj = obj[parts[i]];
      }

      if (obj === undefined || obj === null) {
        return undefined;
      }
    }

    return obj;
  }

  static set(object, dotpath, value) {
    const parts = dotpath.split(".");
    let obj = object;

    for (let i = 0; i < parts.length - 1; i++) {
      let nextObj;

      if (/^\d+$/.test(parts[i + 1]) || parts[i + 1] === "$") {
        nextObj = [];
      } else {
        nextObj = {};
      }

      if (Array.isArray(obj)) {
        const index = parts[i] === "$" ? obj.length : parseInt(parts[i]);
        obj = obj[index] ? obj[index] : obj[index] = nextObj;
      } else {
        obj = obj[parts[i]] ? obj[parts[i]] : obj[parts[i]] = nextObj;
      }
    }

    let key = parts[parts.length - 1];

    if (key === "$" && Array.isArray(obj)) {
      key = obj.length;
    }

    obj[key] = value;
    return obj;
  }

}

exports.default = Dot;
//# sourceMappingURL=Dot.js.map