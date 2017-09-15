"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = pickByKey;
function pickByKey(obj, func) {
  return Object.keys(obj).reduce(function (newObj, key) {
    if (func(key)) {
      newObj[key] = obj[key];
    }
    return newObj;
  }, {});
}