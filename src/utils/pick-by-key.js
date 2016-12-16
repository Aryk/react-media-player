
export default function pickByKey(obj, func) {
  return Object.keys(obj).reduce(function (newObj, key) {
    if (func(key)) {
      newObj[key] = obj[key]
    }
    return newObj;
  }, {});
}
